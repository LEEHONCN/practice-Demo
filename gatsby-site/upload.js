const AWS = require("aws-sdk");
const cli = require('cac')()
const rd = require("rd")
const fs = require("fs");

AWS.config.loadFromPath('./config.json');
// const baseParams = { Bucket : 'growing-test' };
const baseParams = { Bucket : 'files.growingio.com' };

cli.command('upload <localPath> <remotePath>', 'upload file to aws s3').action((localPath, remotePath) => {
  const s3 = new AWS.S3();
  let params = JSON.parse(JSON.stringify(baseParams));
  fs.stat(localPath, (err, stat) => {
    if(err) throw err;
    if(stat.isFile()){
      uploadFile(s3, localPath, remotePath, params);
    }else if(stat.isDirectory()){
      rd.eachSync(localPath, function (fileName, stat) {
        uploadFile(s3, fileName, remotePath, params);
        console.log('file: %s', f);
      });
    }else{
      console.log('不知道这是什么文件');
    }
  })
});

cli.command('show', "show structure of this bucket").action(() => {
  const s3 = new AWS.S3();
  let params = JSON.parse(JSON.stringify(baseParams));
  s3.listObjects(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log('files.growing.com 这个桶有以下文件夹:')
      new Set(data.Contents.map((item) => {
        let tmp = item.Key.split('/')
        tmp.pop()
        return tmp.join('/');
      })).forEach((item) => {
        console.log(item)
      });
    }
  });
});

cli.help()
cli.parse()

function uploadFile(s3, localPath, remotePath, params){
  params.Key = remotePath + localPath.split('/').pop();
  console.log(params)
  params.Body = fs.readFileSync(localPath, (err) => {
    if(err) throw err;
  });
  s3.upload(params, function (err, data) {
    if (err) {
      console.log("Error", err);
    } if (data) {
      console.log("Upload Success", data.Location);
    }
  });
}

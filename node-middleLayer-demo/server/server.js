const http = require('http')
const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
// const handle = app.getRequestHandler() // 以后再了解

app.prepare().then(() => {
  const server = express()
  // get state then to render
  server.get('/', (req, res) => {
    reqBackendandRender(req, res, '/')
  })
  // direct render
  server.get('/article', (req, res) => {
    app.render(req, res, '/article')
  })

  server.listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })

}).catch((ex) => {
  console.log('发生了异常');
});

function reqBackendandRender(req, res, route) {
  const request = http.request('http://localhost:3001' + route, (response) => {
      let buff = [];
      response.on('data', (d) => { buff.push(d) })
      .on('end', () => {
        res.data = Buffer.concat(buff).toString();
        app.render(req, res, route === '/' ? '/index' : '/');
      })
    });
  request.on('error', (e) => {
    if(e) throw e
    app.render(req, res, '/404');
  }).end();
}
const express = require('express')
const backServer = express();

backServer.get('/', (req, res) => {
  res.send("Hello World")
})

backServer.listen(3001, err => {
  if (err) throw err
  console.log('> Ready on http://localhost:3001')
})
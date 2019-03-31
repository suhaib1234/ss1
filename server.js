const express = require('express')
const port = process.env.port || 8709
const server = express()

server.get('/',(req,res) =>{
res.send('hello how are u')
})



    server.listen(port)

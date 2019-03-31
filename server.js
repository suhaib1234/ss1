const express = require('express')
const PORT = process.env.PORT || 8709
const server = express()

server.get('/',(req,res) =>{
res.send('hello how are u')
})



    server.listen(PORT)

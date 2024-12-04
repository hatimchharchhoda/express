const http = require('http')

const server = http.createServer()

server.on('request',(req,res)=>{
   res.end('create server using event ON. on port 5000.')
})

server.listen(5000)
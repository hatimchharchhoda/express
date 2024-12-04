const http = require('http')

const server = http.createServer((req,res)=>{
   if(req.url === '/'){
      res.end('hello welcome to our home page')
   }
   if(req.url === '/about'){
      res.end('hi my name is Hatim')
   }
   res.end(`
      <h1>Ooops!</h1>
      <p>the page you are looking for doesn't exits</p>
      <a href="/">Back home<a>
      `)
})

server.listen(2000)
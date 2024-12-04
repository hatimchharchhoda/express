const express = require('express')
const app = express()

app.get('/',(req,res)=>{
   console.log('content send to server');
   res.send('home page')
})

app.get('/about',(req,res)=>{
   res.send('about page')
})

app.all('*',(req,res)=>{
   res.status(404).send('<h1>page not found</h1>')
})

app.listen(5000,()=>{
   console.log('server runs on server 5000');
})
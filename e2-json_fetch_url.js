const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/',(req,res)=>{
   res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products',(req,res)=>{
   const newproducts = products.map((product)=>{
      const {id,name} = product;
      return {id,name};
   })
   res.json(newproducts)
})

app.get('/api/products/:productid',(req,res)=>{
   const {productid} = req.params
   const singleproduct = products.find((product)=>product.id === Number(productid))
   if(!singleproduct){
      return res.status(404).send('<h1>product with given id not found</>')
   }
   res.json(singleproduct)
})

app.listen(5000,()=>{
   console.log("server is running on port 5000")
})
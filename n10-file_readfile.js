const { readFile, writeFile } = require('fs')

//it is a async way of reading a file - not line by line
readFile('./content/first.txt',(err,result)=>{
   if(err){
      console.log(err);
      return
   }
   const first = result
   readFile('./content/second.txt',(err,result)=>{
      if(err){
         console.log(err);
         return
      }
      const second = result
      writeFile('./content/sync_file.txt', `here is the sync: ${first}, ${second}.`,(err,result)=>{
         if(err){
            console.log(err);
            return
         }
         console.log(result)
      })
   })
})
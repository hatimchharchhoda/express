const {createReadStream} = require('fs')

const stream = createReadStream('./content/bigtext.txt',{
   highWaterMark: 9000,
   encoding: 'utf8',
})

// by reading file using this we find that we are reading data in chunks instead of full   instance
// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/bigtext.txt', { highWaterMark: 9000 })
// const stream = cretaeReadStream('./content/bigtext.txt', { encoding: 'utf8' })

stream.on('data',(result)=>{
   console.log(result)
})

stream.on('error',(err)=>{
   console.log(err);
})
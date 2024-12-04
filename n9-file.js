const { readFileSync, writeFileSync } = require('fs')

// it is sync way of reading a file - line by line
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
console.log(`the content of two file is: ${first}, ${second}`);

const text = `the content of two file is: ${first}, ${second}`
writeFileSync('./content/sync_file.txt',text,{flag: 'a'})
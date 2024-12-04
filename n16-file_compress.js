const { readFile, writeFile } = require('fs').promises

const start = async () => {
   try {
      const first = await readFile('./content/first.txt','utf8')
      const second = await readFile('./content/second.txt','utf8')
      console.log(`text is: ${first}, ${second}`);
      await writeFile('./content/sync_file.txt',' This Is New One:',{flag: 'a'})
   } catch (error) {
      console.log(error);
   }
}

start()
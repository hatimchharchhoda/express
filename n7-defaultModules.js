const os = require('os')

//fetching current user
const user = os.userInfo()
console.log(user)

// fetching the uptime
const time = os.uptime()
console.log(time)

//object of data
const info = {
   name: os.type(),
   release: os.release(),
   totalMem: os.totalmem(),
   freeMem: os.freemem(),
}
console.log(info)
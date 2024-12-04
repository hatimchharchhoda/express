const _ = require('loadsh')

const item = [1,[2,[3,[4]]]]
const way = _.flattenDeep(item)

console.log(item);
console.log(way);
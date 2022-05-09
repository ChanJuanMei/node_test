const _ = require('lodash');
let lists = [{id: 0},{id:1}, {id: false}]
const a = _.compact(lists)
console.log(_.differenceWith([{id: 0},{id:1}], [{id:1}]))

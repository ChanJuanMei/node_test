var fs = require("fs");
var router = require("./router");
var server = require("./server");

// var data = fs.readFileSync('input.pdf'); //阻塞
// console.log(data.toString());

// fs.readFile('input.word', function(err, data){ //非阻塞
//   if(err) return console.error(err.stack);
//   console.log(data.toString())
// })
// console.log("程序执行结束  s!");

// var events = require('events');
// // 创建eventEmitter对象
// var eventEmitter = new events.EventEmitter();

// var connentHandler = function connected() {
//   console.log('链接成功');
//   eventEmitter.emit('data_receiced');
// }
// eventEmitter.on('connent', connentHandler)

// eventEmitter.on('data_receiced', function(){
//   console.log('数据接收成功');
// })
// eventEmitter.emit('connent')
// console.log('end');

// var events = require('events'); 
// var eventEmitter = new events.EventEmitter(); 
// // eventEmitter.emit('error'); 
// eventEmitter.on('error',function(err){
//   console.error('Error:',err);
// });
// server.start(router.route);
console.log('process', process.env.NODE_ENV)
console.log('__dirname', __dirname)


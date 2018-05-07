var fs = require("fs");

// var data = fs.readFileSync('input.pdf');
// console.log(data.toString());

fs.readFile('input.pdf', function(err, data){
  if(err) return console.error(err);
  console.log(data.toString())
})
console.log("程序执行结束!");
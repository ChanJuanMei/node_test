
// /** */
// function fruits(){}
// fruits.prototype = {
//   color: 'red',
//   say: function () {
//     console.log("My color is " + this.color)
//   }
// }

// var apple = new fruits;
// console.log(apple.say())

// const banana = {
//   color: 'yellow'
// }
// apple.say.call(banana)
// apple.say.apply(banana)

// //追加
// var array1 = [12, 'foo', {name: "Joe"}, -2346]
// var array2 = ["Doe", 555]
// const a = Array.prototype.push.apply(array1, array2)
// console.log(a, '--', array1, '~~', array2);

// //获取数组中的最大值和最小值
// var numbers = [5, 451, 120, -217]
// var maxInNumber = Math.max.apply(Math, numbers);
// // var maxInNumber = Math.max.call(Math, ...numbers)

// // 类（伪）数组使用数组方法
// var domNodes = Array.prototype.slice.call(document.getElementsByTagName("*"));

function Delayer(callback,delayTime){  
  this.callback = callback;  
  this.count = 0;  
  this.delayTime = delayTime;  
  this.queue = new Array();  
  this.ring = 0;  
}  

/* 此方法为UUID实现摘自网络 */  
Delayer.prototype.getUniqueId = function(){  
  var s = [], itoh = '0123456789ABCDEF';  

  // Make array of random hex digits. The UUID only has 32 digits in it, but we  
  // allocate an extra items to make room for the '-'s we'll be inserting.  
  for (var i = 0; i <36; i++) s[i] = Math.floor(Math.random()*0x10);  

  // Conform to RFC-4122, section 4.4  
  s[14] = 4;  // Set 4 high bits of time_high field to version  
  s[19] = (s[19] & 0x3) | 0x8;  // Specify 2 high bits of clock sequence  
    
  // Convert to hex chars  
  for (var i = 0; i <36; i++) s[i] = itoh[s[i]];  
    
  // Insert '-'s  
  s[8] = s[13] = s[18] = s[23] = '-';  

  return s.join('')+'-'+(++this.ring); //通过ring更加提高唯一性  
}  

Delayer.prototype.delay = function(){  
  //减少后来者进入  
  if (this.count == 0) {  
      ++this.count;  
      var uniqueId=this.getUniqueId();  
      this.queue.push(uniqueId);  
      //通过判断第一push进去的id是否是自己来决定是否执行  
      if (this.queue[0] == uniqueId) {  
          var self=this;   
          setTimeout(function(){  
              try{self.callback();}catch(err){}  
              //执行完后将值清空，保证下次还能执行  
              finally{  
                  self.count = 0;  
                  self.queue = new Array();  
                  if(self.ring > 9999) self.ring = 0;  
              }  
          },this.delayTime);  
      }  
  }  
}  

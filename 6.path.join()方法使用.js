const path = require('path')
const fs =require('fs')

// 注意: ../抵消前面的路径
//../会抵消/c,结果就是abde
// const pathStr = path.join('a','/b/c','../','./d','e')
// console.log(pathStr);

// fs.readFile(__dirname + '/files/1.txt')//这个不建议。建议下面的
fs.readFile(path.join(__dirname, './files/1.txt'), 'utf8', function(err, dataStr) {
  if (err) {
    return console.log(err.message)
  }
  console.log(dataStr)
})

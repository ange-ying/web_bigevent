// 1，先导入rs模块，来操作文件
const fs = require('fs')

// 2，调用fs.readFile()方法读取文件
//   参数1：读取文件的存放路径
//   参数2：读取文件时候采用的编码格式，一般默认指定utf8
//   参数3：回调函数，拿到读取失败和成功的结果 err dataStar
fs.require('./files/1.txt','utf8',function(err,dataStar){
  // 打印失败结果
  // 读取成功err为null
  // 读取失败err的值为错误对象，dataStr的值为undefuned
  console.log(err)
  console.log('-----------------');
  // 打印成功结果
  console.log(dataStr);
})
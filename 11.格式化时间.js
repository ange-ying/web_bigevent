// 导入自定义的格式化时间模块
const TIME = require('./11.dataFormat')

// 调用方法，进行时间的格式化
const dt = new Date()
console.log(dt);

// 调用dataFormat这个方法
const nr = TIME.dataFormat(dt)
console.log(nr);
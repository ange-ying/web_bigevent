// 导入moment包
// 导入的包名称，就是安装包的名称
const moment = require('moment')
// H:m:s一个不补0
const dt = moment().format('YYYY-MM-DD HH:mm:ss')
console.log(dt);

// 使用require导入格式化包

// 参考导入moment包的官方api对
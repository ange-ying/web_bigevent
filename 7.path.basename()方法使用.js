const path = require('path')

// 定义文件的存放路径
const fpath = '/a/b/c/index.html'

// 获取到文件名以及后缀名.html
// const fullName = path.basename(fpath)
// console.log(fullName)

// 只获取文件名index
const nameWithoutExt = path.basename(fpath, '.html')
console.log(nameWithoutExt)

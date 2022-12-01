// 这是包的入口文件
// 定义格式化事件的函数
function dateFormat(dateStr){
  const dt = new Date(dateStr)

  const y = padZero(dt.getFullYear())
  const m = padZero(dt.getMonth() + 1)
  const d = padZero(dt.getDate())

  const hh = padZero(dt.getHours())
  const mm = padZero(dt.getMinutes())
  const ss = padZero(dt.getSeconds())

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

function padZero(n){
  n > 9 ? n : "0" + n
}
module.exports = {
  dateFormat
}
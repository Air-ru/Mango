const baseURL = 'http://127.0.0.1:7001';

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}




const wxRequest = (data) => {
  console.log(...data)
  return new Promise(function (resolve, reject) {
    data.url = baseURL+data.url;

    wx.request({
      ...data,
      success(res) {
        //请求成功
        //判断状态码---errCode状态根据后端定义来判断
        if (res.data.statusCode == 200) {
          resolve(res);
        } else {
          //其他异常
          reject(res);
        }
      },
      fail(err) {
        //请求失败
        reject(err)
      }
    })
  })
}

module.exports = {
  formatTime,
  wxRequest
}
const fileSystem = require('fs');

let logHandler = (req, res, next) => {

    let currentDate = new Date()
    let formatDate = currentDate.getDate() + "-" + currentDate.getMonth() + "-" + currentDate.getFullYear()
    let formatTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    let reqMethod = req.method
    let reqURL = req.url
    let status = res.statusCode

    let logItem = `[${formatDate} ${formatTime}] Status Code: ${status}, Method: ${reqMethod}, URL: ${reqURL}`

    console.log(logItem)
    fileSystem.appendFile("logs.txt", logItem + "\n", error => {
        if (error) {
          console.log(error);
        }
      });
    next()
}



module.exports = logHandler
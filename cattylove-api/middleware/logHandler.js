let logHandler = (req, res, next) => {

    let currentDate = new Date()
    let formatDate = currentDate.getDate() + "-" + currentDate.getMonth() + "-" + currentDate.getFullYear()
    let formatTime = current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds();
    let reqMethod = req.method
    let reqURL = req.url
    let status = res.statusCode

    console.log(`[${formatDate} ${formatTime}] Status Code: ${status}, Method: ${reqMethod}, URL: ${reqURL}`)
    next()
}



module.exports = logHandler
const errorHandler = (err, req, res, next) => {
    if (err.status === 401) {
      return res.status(401).send("You have no access to this resource")
    } else {
      next(err)
    }
}

module.exports = errorHandler
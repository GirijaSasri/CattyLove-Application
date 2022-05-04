const jwt = require('jsonwebtoken')

const adminAuthenticator = (req, res, next) => {
    const token = req.header('x-jwt-token')
    if(!token) 
        return res.status(401).send('Access denied. Token not found.')

    // checking whether valid and authenticated
    try {
        jwt.verify(token, process.env.SECRET_KEY)
    }
    catch {
        return res.status(401).send('Access deneid. Invalid token')
    }

    // authorize
    const decoded = jwt.decode(token, process.env.SECRET_KEY)
    if(!decoded.isAdmin) 
        return res.status(403).send('Forbidden. You do not have access to this endpoint.')
        
    next()
}

module.exports = adminAuthenticator
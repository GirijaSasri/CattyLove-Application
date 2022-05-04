const { auth } = require('express-oauth2-jwt-bearer');

const checkAuth0Jwt = auth({
    audience: 'http://localhost:5000',
    issuerBaseURL: `https://dev-ib-22v6w.us.auth0.com/`
})

module.exports = checkAuth0Jwt
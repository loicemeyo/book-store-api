const jwt = require('jsonwebtoken')

const createToken = (payload, secretKey) => jwt.sign(payload, secretKey)

module.exports = {
  createToken,
}

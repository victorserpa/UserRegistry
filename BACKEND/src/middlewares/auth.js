const { promisify } = require("util")
const jwt = require("jsonwebtoken")
const authConfig = require("../config/auth")

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: "Invalid authorization" })
  }

  const [, token] = authHeader.split(" ")

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret)
    req.idUser = decoded.id_user
  } catch (err) {
    return res.status(401).json({ error: "Error authenticating" })
  }
  return next()
}

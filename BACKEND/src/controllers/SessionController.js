const jwt = require("jsonwebtoken")
const Yup = require("yup")
const User = require("../models/users")
const authConfig = require("../config/auth.js")

class SessionController {
  async session(req, res) {
    const schema = Yup.object().shape({
      login: Yup.string().required(),
      password: Yup.string().required(),
    })
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation failed!" })
    }
    const { login, password } = req.body
    const user = await User.findOne({
      where: {
        login,
      },
      attributes: ["id_user", "name", "admin", "password_hash"],
    })
    if (!user) {
      return res.status(401).json({ error: "User not found!" })
    }
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: "Password is incorrect!" })
    }
    const { id_user, name, admin } = user

    return res.json({
      user: {
        id_user,
        name,
        login,
        admin,
      },
      token: jwt.sign({ id_user, admin, name }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    })
  }
}

module.exports = new SessionController()

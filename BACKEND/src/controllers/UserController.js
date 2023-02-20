const Yup = require("yup")
const Sequelize = require("sequelize")
const User = require("../models/users.js")
const bcrypt = require("bcryptjs")

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      login: Yup.string().required().max(50),
      name: Yup.string().required().max(200),
      telefone: Yup.string().required().max(20),
      email: Yup.string().required().max(50),
      birthday: Yup.date().required(),
      password: Yup.string().required().min(6).max(150),
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation fails!" })
    }

    const UserExists = await User.findOne({
      attributes: ["id_user"],
      where: {
        [Sequelize.Op.or]: {
          login: req.body.login,
          email: req.body.email,
        },
      },
    })

    if (UserExists) {
      return res.status(400).json({ error: "Usuário já existe!!" })
    }

    const { id_user, name, email } = await User.create(req.body)
    return res.json({
      id_user,
      name,
      email,
    })
  }

  async index(req, res) {
    const timeout = setTimeout(async () => {
      const { page = 1 } = req.query
      const users = await User.findAll({
        limit: 10,
        offset: (page - 1) * 10,
        order: ["name"],
        attributes: [
          "id_user",
          "login",
          "name",
          "telefone",
          "email",
          "birthday",
        ],
      })
      return res.json(users)
    }, 0)
    return () => clearTimeout(timeout)
  }

  async updatePassword(req, res) {
    const { login, password } = req.body

    const user = await User.findOne({ where: { login } })

    if (!user) {
      return res.status(404).json({ error: "User not found!" })
    }

    user.password_hash = await bcrypt.hash(password, 10)
    await user.save()
    return res.json({ message: "Password updated successfully!" })
  }

  async delete(req, res) {
    const user = await User.findByPk(req.params.id_user)

    if (!user) {
      return res.status(400).json({ error: "User not exists!" })
    }

    await user.destroy(req.params.id_user)

    return res.json({ message: "User excluded with success!" })
  }
}

module.exports = new UserController()

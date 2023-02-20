const Yup = require("yup")
const Sequelize = require("sequelize")
const User = require("../models/users.js")
const bcrypt = require("bcryptjs")
const multer = require("multer")
const path = require("path")
const { promisify } = require("util")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads") // define o diretório onde o arquivo será salvo
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split("/")[1]
    cb(null, "avatar-" + Date.now() + "." + ext) // define o nome do arquivo
  },
})

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
          "avatar",
        ],
      })
      return res.json(users)
    }, 2000)
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

  async show(req, res) {
    const { id_user } = req.params
    try {
      const user = await User.findOne({
        where: { id_user: id_user },
        attributes: [
          "id_user",
          "login",
          "name",
          "telefone",
          "email",
          "birthday",
          "avatar",
        ],
      })

      if (!user) {
        return res.status(404).json({ error: "User not found" })
      }

      return res.json(user)
    } catch (error) {
      return res.status(500).json({ error: "Error retrieving user" })
    }
  }

  async updateUser(req, res) {
    const { id_user } = req.params

    const user = await User.findByPk(id_user)

    if (!user) {
      return res.status(404).json({ error: "User not found" })
    }

    const schema = Yup.object().shape({
      name: Yup.string().max(200),
      telefone: Yup.string().max(20),
      email: Yup.string().max(50),
      birthday: Yup.date(),
      avatar: Yup.mixed()
        .test("fileSize", "O arquivo é muito grande", (value) => {
          if (!value) {
            return true
          }

          return value.size <= 12024 * 1024
        })
        .test("fileType", "Tipo de arquivo inválido", (value) => {
          if (!value) {
            return true
          }

          return ["image/jpeg", "image/png"].includes(value.mimetype)
        }),
    })

    try {
      await schema.validate(req.body)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }

    const { name, telefone, email, birthday } = req.body

    if (req.file) {
      await user.update({ avatar: req.file.filename })
    }

    await user.update({
      name,
      telefone,
      email,
      birthday,
    })

    return res.json(user)
  }
}

module.exports = new UserController()

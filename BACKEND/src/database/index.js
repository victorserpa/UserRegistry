const Sequelize = require("sequelize")
const User = require("../models/users.js")
const dbConfig = require("../config/database.js")

const models = [User]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(dbConfig)
    models.map((model) => model.init(this.connection))
  }
}

module.exports = new Database()

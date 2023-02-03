const dot = require('dotenv/config')
const cors = require("cors")
const express = require("express")
const routes = require("./routes.js")
const db = require("./database")

class Index {
  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(cors())
    this.app.use(express.json())
  }

  routes() {
    this.app.use(routes)
  }
}

module.exports = new Index().app

const Router = require("express")
const SessionController = require("./controllers/SessionController.js")
const UserController = require("./controllers/UserController.js")
const authMiddleware = require("./middlewares/auth.js")

const routes = new Router()

routes.get("/", (req, res) => res.json({ message: "Its OK!" }))
routes.post("/login", SessionController.session)
routes.post("/register", UserController.store)
routes.put("/users/:login", UserController.updatePassword)

routes.use(authMiddleware)

routes.get("/users", authMiddleware, UserController.index)
routes.delete("/users/:id_user", authMiddleware, UserController.delete)



module.exports = routes

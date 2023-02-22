const Router = require("express")
const SessionController = require("./controllers/SessionController.js")
const UserController = require("./controllers/UserController.js")
const authMiddleware = require("./middlewares/auth.js")
const multer = require("multer")
const upload = multer({ dest: "uploads/" })

const routes = new Router()

routes.get("/", (req, res) => res.json({ message: "Its OK!" }))
routes.post("/login", SessionController.session)
routes.post("/register", UserController.store)
routes.put("/users/:login", UserController.updatePassword)
// routes.get("/avatar/", UserController.showAvatar)

routes.use(authMiddleware)

routes.get("/users", authMiddleware, UserController.index)
routes.get("/users/:id_user", UserController.show)
routes.patch(
  "/users/:id_user",
  upload.single("avatar"),
  UserController.updateUser
)
routes.delete("/users/:id_user", authMiddleware, UserController.delete)

module.exports = routes
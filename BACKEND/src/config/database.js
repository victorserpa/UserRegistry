module.exports = {
  dialect: "mysql",
  host: "localhost",
  port: "3306",
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
}

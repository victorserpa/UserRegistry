const bcrypt = require('bcryptjs');

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      "users",
      [
        {
          avatar: "",
          login: "admin",
          name: "admin",
          telefone: "123456789",
          email: "admin@test.com",
          birthday: "2020-01-01",
          admin: true,
          password_hash: bcrypt.hashSync("admin", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    )
  },
};

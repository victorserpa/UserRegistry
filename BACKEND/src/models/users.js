const Sequelize = require("sequelize");
const bcrypt = require("bcryptjs");

class User extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id_user: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        login: {
          type: Sequelize.STRING,
          unique: true,
        },
        name: Sequelize.STRING,
        telefone: Sequelize.STRING,
        email: Sequelize.STRING,
        birthday: Sequelize.DATEONLY,
        admin: Sequelize.BOOLEAN,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
        freezeTableName: "users",
        tableName: "users",
      }
    )

    this.addHook("beforeSave", async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 10);
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

module.exports = User;
module.exports = (sequelize, Sequelize) => {
  const users = sequelize.define("user", {

    user_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    first_name: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    last_name: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    role: {
      type: Sequelize.STRING,
      allowNull: false
    },
    school_email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    gender: {
      type: Sequelize.STRING(6),
      allowNull: false
    },
    organisation: {
      type: Sequelize.STRING,
      allowNull: false
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, { timestamps: false });

  return users;
};


module.exports = (sequelize, Sequelize) => {
  const user_playgrounds = sequelize.define("user_playgrounds", {
    userpg_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    status: {
      type: Sequelize.STRING,
      allowNull: true
    },
    progress: {
      type: Sequelize.INTEGER
    },
    created_at: {
      type: Sequelize.DATE
    },
    modified_at: {
      type: Sequelize.DATE
    }
  }, { timestamps: false });
  return user_playgrounds;
}
module.exports = (sequelize, Sequelize) => {
const user_badges = sequelize.define("user_badges", {
    userbadges_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    status: {
      type: Sequelize.STRING,
    },
    completed_playgrounds: {
      type: Sequelize.INTEGER,
    },
    completed_at: {
      type: Sequelize.DATE
    },
    created_at: {
      type: Sequelize.DATE
    },
    modified_at: {
      type: Sequelize.DATE
    },
  }, { timestamps: false });
  return user_badges;
}
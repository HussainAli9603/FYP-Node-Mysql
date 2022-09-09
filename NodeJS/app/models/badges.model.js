module.exports = (sequelize, Sequelize) => {
const badges = sequelize.define("badges", {
    badge_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    badge_name: {
      type: Sequelize.STRING
    },
    badge_description: {
      type: Sequelize.STRING
    },
    vine_level: {
      type: Sequelize.INTEGER
    }
  }, { timestamps: false });
  
  return badges;
}

module.exports = (sequelize, Sequelize) => {
const badge_vines = sequelize.define("badge_vines", {
    vine_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    vine_id: {
      type: Sequelize.STRING,
    },

    vine_name: {
      type: Sequelize.STRING,
    },
    
    vine_description: {
      type: Sequelize.STRING,
    },
    total_badges: {
      type: Sequelize.INTEGER,
    },
    bg_colour: {
      type: Sequelize.INTEGER
    },
    vine_colour: {
      type: Sequelize.INTEGER
    },
    created_at: {
      type: Sequelize.DATE
    },
    modified_at: {
      type: Sequelize.DATE
    },
  }, { timestamps: false });
  return badge_vines;
}
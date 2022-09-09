module.exports = (sequelize, Sequelize) => {
  const playgrounds = sequelize.define("playgrounds", {
    playground_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    playground_title: {
      type: Sequelize.STRING,
      allowNull: true
    },
    playground_description: {
      type: Sequelize.STRING,
      allowNull: true
    },
    playground_etc: {
      type: Sequelize.INTEGER
    },
    created_at: {
      type: Sequelize.DATE
    },
    modified_at: {
      type: Sequelize.DATE
    }
  }, { timestamps: false });

  return playgrounds;

}
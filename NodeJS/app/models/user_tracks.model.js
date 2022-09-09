module.exports = (sequelize, Sequelize) => {
const user_tracks = sequelize.define("user_tracks", {
    usertracks_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    create_at: {
      type: Sequelize.DATE
    },
    modified_at: {
      type: Sequelize.DATE
    }
  }, { timestamps: false });

  return user_tracks;
}
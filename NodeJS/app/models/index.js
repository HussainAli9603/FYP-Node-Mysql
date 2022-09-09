const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users.model.js")(sequelize, Sequelize);
db.user_tracks = require ("./user_tracks.model.js")(sequelize, Sequelize);
db.tracks = require("./tracks.model.js")(sequelize, Sequelize);
db.user_badges = require ("./user_badges.model.js")(sequelize, Sequelize);
db.user_playgrounds = require ("./user_playgrounds.model.js")(sequelize, Sequelize);
db.badges = require("./badges.model.js")(sequelize, Sequelize);
db.playgrounds = require("./playgrounds.model.js")(sequelize, Sequelize);
db.badge_vines = require("./badge_vines.model.js")(sequelize, Sequelize);

db.users.belongsToMany(db.tracks, { through: db.user_tracks, foreignKey: "username"});
db.tracks.belongsToMany(db.users, { through: db.user_tracks, foreignKey: "track_id" });
db.users.belongsToMany(db.badges, { through: db.user_badges, foreignKey: "username" });
db.badges.belongsToMany(db.users, { through: db.user_badges, foreignKey: "badge_id" });
db.badge_vines.hasMany(db.badges, { foreignKey: "badge_vine" });
db.users.belongsToMany(db.badges, { through: db.user_playgrounds, foreignKey: "username" });
db.badges.belongsToMany(db.users, { through: db.user_playgrounds, foreignKey: "badge_id" });
db.badges.hasMany(db.playgrounds, {foreignKey: "badge_id"})

module.exports = db;
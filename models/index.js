const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const connection = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
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
db.connection = connection;

db.dpt = require("./dpt.model.js")(connection, Sequelize);
db.candidate = require("./candidate.model.js")(connection, Sequelize);
db.vote = require("./vote.model.js")(connection, Sequelize);

module.exports = db;
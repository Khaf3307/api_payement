const dbConfig = require("../config/db_conf.js");
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

// Appel des models
db.users = require("./user_db.js")(sequelize, Sequelize);
db.accounts = require("./account_db.js")(sequelize, Sequelize);
db.profils = require("./profil_db.js")(sequelize, Sequelize);
db.transactions = require("./transaction_db.js")(sequelize, Sequelize);
db.articles = require("./article_db.js")(sequelize, Sequelize);

// Association entre la table users et account (1,1)
db.users.hasOne(db.accounts, { as: "accounts" });
db.accounts.belongsTo(db.users, {
  foreignKey: "accountUserid",
  as: "fk_user",
});

// Association entre la table users et profile (1,1)
db.users.hasOne(db.profils, { as: "profils" });
db.profils.belongsTo(db.users, {
  foreignKey: "profilUserid",
  as: "fk_profil",
});

// Association entre la table users et transaction (1,n)
db.users.hasMany(db.transactions, { as: "transactions" });
db.transactions.belongsTo(db.users, {
  foreignKey: "userUserid",
  as: "fk_transaction",
});

// Association entre la table article et transaction (1,n)
db.transactions.hasMany(db.articles, { as: "articles" });
db.articles.belongsTo(db.transactions, {
  foreignKey: "transactionIdTransaction",
  as: "fk_article",
});

module.exports = db;

// const authJwt = require("../config/authJwt");
// module.exports = {
//   authJwt
// };
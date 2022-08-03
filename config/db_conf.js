module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "passer",
    DB: "api_payements",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
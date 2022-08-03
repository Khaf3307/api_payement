module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      userid:{
        type: Sequelize.INTEGER, 
        autoIncrement: true,
        primaryKey: true
      },
      login: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
    });
    return User;
  };
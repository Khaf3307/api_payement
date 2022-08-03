module.exports = (sequelize, Sequelize) => {
    const Profil = sequelize.define("profil", {
      idProfil:{
        type: Sequelize.INTEGER, 
        autoIncrement: true,
        primaryKey: true
      },
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      typeProfile: {
        type: Sequelize.STRING
      },
    });
    return Profil;
  };
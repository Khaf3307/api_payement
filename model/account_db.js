module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define("accounts", {
      idAccount:{
        type: DataTypes.INTEGER, 
        autoIncrement: true,
        primaryKey: true
      },
      balance: {
        type: DataTypes.STRING
      },
      currency: {
        type: DataTypes.STRING
      }
    });
    return Account;
  };
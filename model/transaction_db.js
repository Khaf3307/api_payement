module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define("transactions", {
      idTransaction:{
        type: DataTypes.INTEGER, 
        autoIncrement: true,
        primaryKey: true
      },
      status: {
        type: DataTypes.STRING
      },
      typeTransac: {
        type: DataTypes.STRING
      },
      currency: {
        type: DataTypes.STRING
      }
    });
    return Transaction;
  };
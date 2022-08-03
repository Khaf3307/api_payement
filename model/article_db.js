module.exports = (sequelize, DataTypes) => {
    const Article = sequelize.define("articles", {
      idArticle:{
        type: DataTypes.INTEGER, 
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING
      },
      unitPrice: {
        type: DataTypes.DOUBLE
      },
      quantity: {
        type: DataTypes.INTEGER
      },
      totalPrice: {
        type: DataTypes.DOUBLE
      }
    });
    return Article;
  };
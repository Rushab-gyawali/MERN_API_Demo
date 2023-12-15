const { DataTypes } = require("sequelize");

module.exports = order;

function order(sequelize) {
  const attributes = {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    Title: { type: DataTypes.STRING(30), allowNull: false },
    Quantity: { type: DataTypes.INTEGER, allowNull: false },
    Message: { type: DataTypes.STRING(255), allowNull: true },
    City: { type: DataTypes.STRING(30), allowNull: false },
  };
  const options = {
    freezeTableName: true,
    timeStamp: false,
  };
  return sequelize.define("Order", attributes, options);
}

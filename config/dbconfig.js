const { Sequelize } = require("sequelize");
const orderModel = require("../models/order");
require("dotenv").config;

const sequelize = new Sequelize(
  "Products", // Database name
  "sa", // Database username
  "saa", // Database password
  {
    host: "RUSHAB",
    port: process.env.PORT,
    dialect: "mssql", // Specify the dialect here
    dialectOptions: {
      options: { encrypt: false },
    },
  }
);
const db = {};
db.Order = orderModel(sequelize);
//sync all models with the databse
sequelize.sync({ alter: true });

module.exports = db;

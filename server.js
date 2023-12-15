require("dotenv").config;
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/order", require("./controllers/orderController"));

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});

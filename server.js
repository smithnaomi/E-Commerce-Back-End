require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const connection = require("./config/connection");
// const sequelize = require("./config/connection");
// import sequelize connection

const force = JSON.parse(process.env.DB_FORCE_SYNC);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
//
connection.sync({ force }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
  console.log("synced!");
});

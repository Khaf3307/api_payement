const express = require("express");
const cors = require("cors");
const db = require("./model");
const serveStatic = require('serve-static')
const path = require('path')

const app = express();
var corsOptions = {
  origin: "http://localhost:8083"
};
app.use(cors(corsOptions));

app.use('/',serveStatic(path.join(__dirname,'/dist')))
app.get(/.*/ , function(req, res) {
    res.sendFile(path.join(__dirname,'/dist/index.html'))
})

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to API Page." });
});

require("./route/user_route")(app);
require("./route/profil_route")(app);
require("./route/article_route")(app);

// set port, listen for requests
const PORT = process.env.PORT || 4040;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

//
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

  // db.sequelize.sync({ force: true }).then(() => {
  //   console.log("Drop and re-sync db.");
  // });
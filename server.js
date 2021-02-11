// Server.js - This file is the initial starting point for the Node/Express server.
// *****************************************************************************

// Dependencies
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const logger = require("morgan");

// Requiring passport as we've configured it
const passport = require("./config/passport");

const PORT = process.env.PORT || 3001;
const db = require("./models");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors());
app.use(logger("dev"));
// const routes = require("./routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("public"));
// Serve up static assets (usually on heroku) ?
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(
  session({
    secret: "topsecret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
// =============================================================
// require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(" 🌎 ==> App listening on PORT " + PORT);
  });
});

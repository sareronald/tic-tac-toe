// Server.js - This file is the initial starting point for the Node/Express server.
// *****************************************************************************

// Requiring necessary npm packages - Dependencies
require("dotenv").config();
const path = require("path");
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const logger = require("morgan");

// Requiring passport as we've configured it
const passport = require("./config/passport");

const PORT = process.env.PORT || 5000;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();

const corsOptions = {
  origin: "http://localhost:5000",
};

app.use(cors());
app.use(logger("dev"));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(
  session({
    secret: "process.env.SECRET",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
// =============================================================
require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

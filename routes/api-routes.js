const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("../config/passport");
const db = require("../models");
// const { response } = require("express");
const tictactoeController = require("../controllers/tictactoeController");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back password is not a good idea, but other information can be validated
    res.json({
      id: req.user.id,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      email: req.user.email,
      userType: req.user.userType,
    });
  });

  // ==== SIGNUP ====
  // Route for signing up a user. The user's password is automatically hashed and stored securely due to
  // the configuration of the Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      userType: req.body.userType,
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  });

  app.post("/api/login"),
    (req, res) => {
      User.findOne({
        email: req.body.email,
      }).then((response) => {
        if (response) {
          if (bcrypt.compareSync(req.body.password, response.password)) {
          }
        }
      });
    };

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    // res.json(200);
    res.send(200);
    // res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/userData", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      db.User.findByPk(req.user.id).then((dbUser) => {
        res.status(200).json({
          id: dbUser.id,
          firstName: dbUser.firstName,
          lastName: dbUser.lastName,
          email: dbUser.email,
          userType: dbUser.userType,
        });
      });
    }
  });

  //   *************************************** TICTACTOE CRUD ***************************************** //
  // GET route for getting tictactoe grids
  // app.get("/api/tictactoe/:id", (req, res) => {
  //   if (req.params.userType === "teacher") {
  //     getTeacherTictactoes(req.params.id, res);
  //   } else if (req.params.userType === "student") {
  //     getStudentTictactoes(req.params.id, res);
  //   }
  // });
  // GET
  // app.get("/api/activity/:id", (req, res) => {
  //   db.Activity.findOne({
  //     attributes: ["UserId"],
  //     where: {
  //       TictactoeId: req.params.id,
  //     },
  //     include: db.Tictactoe,
  //   })
  //     .then(() => {
  //       res.status(200);
  //     })
  //     .catch((err) => {
  //       res.status(500).json(err);
  //     });
  // });

  // get all tictactoes
  app.get("/api/tictactoe", (req, res) => {
    db.Tictactoe.findAll().then((result) => res.json(result));
  });

  // PUT route for updating/editing tictactoe grids. Get the updated tictactoe data from req.body
  app.put("/api/tictactoes", (req, res) => {
    db.Tictactoe.update(
      {
        tictactoe_title: req.body.tictactoe_title,
        year_group: req.body.year_group,
        unit_title: req.body.unit_title,
        image_url: req.body.image_url,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    )
      .then((dbTictactoe) => {
        res.status(200).json(dbTictactoe);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

  // Route for adding a TICTACTOE
  app.post("/api/tictactoe", (req, res) => {
    console.log("get id for", req.user.id);
    db.Tictactoe.create({
      tictactoe_title: req.body.tictactoe_title,
      year_group: req.body.year_group,
      unit_title: req.body.unit_title,
      image_url: req.body.image_url,
      authorID: req.user.id,
    })
      .then((dbTictactoe) => {
        res.status(200).json(dbTictactoe);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

  // Route for deleting a TICTACTOE
  app.delete("/api/tictactoe/:id", (req, res) => {
    // We just have to specify which Tictactoe we want to destroy
    db.Tictactoe.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => {
        res.status(200);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

  //   *************************************** ACTIVITY CRUD ***************************************** //
  // Route for adding an ACTIVITY
  app.post("/api/activity", (req, res) => {
    // console.log("get tictactoeID for", req.tictactoe.id);
    db.Activity.create({
      currentSquare: req.body.currentSquare,
      activityName: req.body.activityName,
      difficultyLevel: req.body.difficultyLevel,
      taskDescription: req.body.taskDescription,
      hints: req.body.hints,
      resources: req.body.resources,
      tictactoeID: req.body.tictactoeID,
    })
      .then((dbTictactoe) => {
        res.status(200).json(dbTictactoe);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

  // Route for editing/updating an ACTIVITY. Get the updated Activity data from req.body
  app.put("/api/activity/:id", (req, res) => {
    db.Activity.update(
      {
        activityName: req.body.activityName,
        difficultyLevel: req.body.difficultyLevel,
        taskDescription: req.body.taskDescription,
        hints: req.body.hints,
        resources: req.body.resources,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    )
      .then((dbTictactoe) => {
        res.status(200).json(dbTictactoe);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

  // Route for getting an ACTIVITY in a particular tictactoe
  app.get("/api/activity", (req, res) => {
    db.Activity.findAll({
      attributes: ["TictactoeID"],
      where: {
        TictactoeID: req.tictactoe.id,
      },
      include: db.Tictactoe,
    })
      .then(() => {
        res.status(200);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        id: req.user.id,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email,
        createdAt: req.user.createdAt,
      });
    }
  });
};

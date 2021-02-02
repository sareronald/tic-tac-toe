const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("../config/passport");
const db = require("../models");
const { response } = require("express");

function getTeacherTictactoes(teacherId, response) {
  db.Booking.findAll({
    where: {
      authorID: teacherId,
    },
    attributes: ["id", "tictactie_title", "tictactoe_unit"],
    include: [
      {
        model: db.User,
        as: "teacher",
        attributes: ["id", "firstName", "lastName"],
      },
      {
        model: db.Activity,
        attributes: [
          "id",
          "activity_name",
          "difficulty_level",
          "task_description",
          "hints",
          "resources",
        ],
      },
    ],
  })
    .then((dbBookings) => {
      response.status(200).json(dbBookings);
    })
    .catch((err) => {
      response.status(401).json(err);
    });
}

// ??Do I need to get ttt's that the students have??
// function getStudentTictactoes(studentId, response) {}

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("api/login", passport.authenticate("local"), (req, res) => {
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
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      email: req.user.email,
      password: req.body.password,
      userType: req.user.userType,
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

  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
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
  app.get("/api/tictactoe/:id/:userType", (req, res) => {
    if (req.params.userType === "teacher") {
      getTeacherTictactoes(req.params.id, res);
    } else if (req.params.userType === "student") {
      getStudentTictactoes(req.params.id, res);
    }
  });

  // PUT route for updating/editing tictactoe grids. Get the updated tictactoe data from req.body
  app.put("/api/tictactoes", (req, res) => {
    db.Tictactoe.update(
      {
        tictactoe_title: req.body.tictactoe_title,
        unit_title: req.body.unit_title,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    )
      .then(function (dbTictactoe) {
        res.status(200).json(dbTictactoe);
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  });

  // Route for adding a TICTACTOE
  app.post("/api/tictactoe", (req, res) => {
    db.Tictactoe.create({
      tictactoe_title: req.body.tictactoe_title,
      unit_title: req.body.unit_title,
    })
      .then((dbTictactoe) => {
        res.status(200).json(dbTictactoe);
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  });

  // Route for deleting a TICTACTOE
  app.delete("/api/tictactoe/:id", (res, req) => {
    // We just have to specify which Tictactoe we want to destroy
    db.Tictactoe.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((dbTictactoe) => {
        res.status(200).json(dbBooking);
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  });

  //   *************************************** ACTIVITY CRUD ***************************************** //
  // do I need
  // Route for adding an ACTIVITY
  // app.post("/api/activity", (res, req) => {
  //   db.Activity.create({

  //   })

  // });
  // Route for editing an ACTIVITY
  // app.put("/api/activity/:id", (req,res) => {
  //     db.TictactoeActivity.
  // });

  // Route for getting an ACTIVITY in a particular tictactoe
  app.get("/api/tictactoeactivity/:id", (req, res) => {
    db.TictactoeActivity.findAll({
      attributes: ["UserId"],
      where: {
        UserId: req.params.id,
      },
      include: db.Tictactoe,
    })
      .then((dbActivities) => {
        res.status(200).json(dbActivities);
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  });
};
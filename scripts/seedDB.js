const mongoose = require("mongoose");
const db = require("../models");

// This file empties the User collection and inserts the users below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/tictactoeDB");

const userSeed = [
  {
    firstName: "Simon",
    lastName: "Willis",
    email: "simon.willis@gmail.com",
    password: "simonwillis1",
    userType: "student",
    date: newDate(Date.now()),
  },
  {
    firstName: "James",
    lastName: "Andrews",
    email: "james.andrews@gmail.com",
    password: "jamesandrews1",
    userType: "student",
    date: newDate(Date.now()),
  },
  {
    firstName: "Alexis",
    lastName: "Whitby",
    email: "alexis.whitby@gmail.com",
    password: "alexiswhitby1",
    userType: "student",
    date: newDate(Date.now()),
  },
  {
    firstName: "Ella",
    lastName: "Pearce",
    email: "ella.pearce@gmail.com",
    password: "ellapearce1",
    userType: "student",
    date: newDate(Date.now()),
  },
  {
    firstName: "Maxine",
    lastName: "Thomas",
    email: "maxine.thomas@gmail.com",
    password: "maxinethomas1",
    userType: "teacher",
    date: newDate(Date.now()),
  },
  {
    firstName: "Julie",
    lastName: "Holland",
    email: "julie.holland@gmail.com",
    password: "julieholland1",
    userType: "teacher",
    date: newDate(Date.now()),
  },
  {
    firstName: "Jake",
    lastName: "Compton",
    email: "jake.compton@gmail.com",
    password: "jakecompton1",
    userType: "teacher",
    date: newDate(Date.now()),
  },
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(date.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

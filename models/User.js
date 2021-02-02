// Requiring bcrypt for password hashing. Using bcryptjs version as bcrypt module sometimes causes errors on Windows machines.
const bcrypt = require("bcryptjs");
// import bcrypt from "bcryptjs";

// Creating User model
module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true,
      validate: {
        len: [1],
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true,
      validate: {
        len: [1],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    // The password cannot be null
    hashedPassword: {
      type: DataTypes.STRING(),
      allowNull: false,
      is: /^[0-9a-f]{64}$/i,
      validate: {
        len: [6],
      },
    },
    userType: {
      type: DataTypes.ENUM("student", "teacher"),
      allowNull: false,
    },
  });

  User.associate = function (models) {
    // Associating tictactoes with author/teacher.
    // Teacher 'has many' tic-tac-toes
    User.hasMany(models.Tictactoe, {
      foreignKey: "authorID",
      onDelete: "cascade",
    });

    // do students need to have many tic-tac-toes or is this a COULD/WOULD?
  };
  return User;
};

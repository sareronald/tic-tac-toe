// Requiring bcrypt for password hashing. Using bcryptjs version as bcrypt module sometimes causes errors on Windows machines.
const bcrypt = require("bcryptjs");
// import bcrypt from "bcryptjs";

// Creating User model
module.export = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
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
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userType: {
      type: DataTypes.ENUM("student", "teacher"),
      allowNull: false,
    },
  });
};

User.associate = function (models) {
  // Associating tictactoes with author/teacher.
  // Teacher 'has many' tic-tac-toes
  User.hasMany(models.Tictactoe, {
    foreignKey: "authorID",
    onDelete: "cascade",
  });

  // do students need to have many tic-tac-toes or is this a COULD/WOULD?
  return User;
};

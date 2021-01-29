module.exports = function (sequelize, DataTypes) {
  const Tictactoe = sequelize.define("Tictactoe", {
    tictactoe_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    activity_title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    topic: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    task_description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    hints: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    resources: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  // Tictactoe.associate = ???
  Tictactoe.associate = function (models) {
    Tictactoe.belongsTo(models.User, {
      as: "teacher",
      foreignKey: {
        allowNull: false,
        name: "authorID",
      },
    });

    Tictactoe.hasMany(models.Activity, {
      foreignKey: "tictactoeID",
      onDelete: "cascade",
    });
  };

  return Tictactoe;
};

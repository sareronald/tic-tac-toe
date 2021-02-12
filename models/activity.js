module.exports = function (sequelize, DataTypes) {
  const Activity = sequelize.define(
    "Activity",
    {
      currentSquare: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      activityName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [1] },
      },
      // Level 1=beginner, Level 2=intermediate, Level 3=advanced
      difficultyLevel: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      taskDescription: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 200],
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
    },
    // This table does not need a timestamp
    { timestamps: false }
  );

  // Link each activity to the Tic-tac-toe it belongs to
  Activity.associate = function (models) {
    Activity.belongsTo(models.Tictactoe, {
      foreignKey: {
        allowNull: true,
        name: "tictactoeID",
      },
    });
  };
  return Activity;
};

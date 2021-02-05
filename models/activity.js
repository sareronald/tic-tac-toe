module.exports = function (sequelize, DataTypes) {
  const Activity = sequelize.define(
    "Activity",
    {
      activityName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [1] },
      },
      // Level 1=beginner, Level 2=intermediate, Level 3=advanced
      difficultyLevel: {
        type: DataTypes.INTEGER,
        allowNull: false,
        isInt: true,
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
        allowNull: false,
        name: "tictactoeID",
      },
    });
  };
  return Activity;
};

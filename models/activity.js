module.exports = function (sequelize, DataTypes) {
  const Activity = sequelize.define("Activity", {
    activty_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [1] },
    },
    // Level 1=beginner, Level 2=intermediate, Level 3=advanced
    difficulty_level: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    // This table does not need a timestamp
    timestamps: false,
  });

  Activity.associate = function (models) {
    Activity.belongsTo(models.Tictactoe, {
      foreignKey: {
        allowNull: false,
        name: "tictactoeID",
      },
    });

  return Activity;
};

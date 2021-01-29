module.exports = function (sequelize, DataTypes) {
  const Activity = sequelize.define(
    "Activity",
    {
      activty_title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [1] },
      },
    },
    {
      // This table does not need a timestamp
      timestamps: false,
    }
  );
  return Activity;
};

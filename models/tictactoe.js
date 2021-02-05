module.exports = function (sequelize, DataTypes) {
  const Tictactoe = sequelize.define("Tictactoe", {
    tictactoe_title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    unit_title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
  });

  //  Link Tictactoe to a teacher via authorID
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

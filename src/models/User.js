// src/models/User.js
const { DataTypes } = require("sequelize");
<<<<<<< HEAD
const sequelize = require("../\/utils/db");
=======
const sequelize = require("../utils/db");
>>>>>>> 73f05c4bebbbeec9947a6897a9cf53e4acd9696e

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      field: "created_at", 
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "updated_at", 
    },
  },
  {
    timestamps: true,
    underscored: true,
    tableName: "users",
  }
);

module.exports = User;

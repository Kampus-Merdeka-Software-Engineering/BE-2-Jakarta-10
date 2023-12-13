// src/models/User.js
const { DataTypes } = require("sequelize");
const sequelize = require("../\/utils/db");

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

import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Victima = sequelize.define(
  "victimas",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    id_number: {
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING,
    }
  },
  {
    timestamps: false,
  }
);


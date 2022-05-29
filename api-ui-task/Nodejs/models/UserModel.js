import { Sequelize } from "sequelize";
import { db } from "../config/Database.js";

const { DataTypes } = Sequelize;

export const Assignments = db.define("assignments", {
  title: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  music_genre: {
    type: DataTypes.STRING,
  },
  practice_time: {
    type: DataTypes.STRING,
  },
  days: {
    type: DataTypes.STRING,
  },
  days_practiced: {
    type: DataTypes.STRING,
  },
  createdAt: {
    field: "createdat",
    type: DataTypes.DATE,
  },
  updatedAt: {
    field: "updatedat",
    type: DataTypes.DATE,
  },
});

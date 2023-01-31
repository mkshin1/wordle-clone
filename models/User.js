import { Sequelize } from "sequelize";
import { Op, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize(
  "postgres://michaelshin:1234@localhost:5432/wordle"
);

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export const User = sequelize.define(
  "user",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    hashed_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
    // your other configuration here
  }
);

console.log(User === sequelize.models.user);

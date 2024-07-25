import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "violeta", // db name,
  "postgres", // username
  "0000", // password
  {
    host: "localhost",
    port: 5433, // especifica el puerto aquí
    dialect: "postgres",
    // pool: {
    //   max: 5,
    //   min: 0,
    //   require: 30000,
    //   idle: 10000,
    // },
    logging: false,
  }
);

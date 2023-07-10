import { Sequelize, DataType } from "sequelize-typescript";
import dotenv from 'dotenv';
import { User } from "../models/user.model";

dotenv.config();

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  dialect: "postgres",
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  storage: 'postgres:memory:',
  schema: 'public',
  models: [User]
});

export const initDB = async () => {
  await sequelize.authenticate().then(
    () => console.log('Authenticate lograda')
  ).catch((err)=> console.log(err));

  await sequelize.sync({ alter: true }).then(
    ()=> console.log('Sync logrado'))
    .catch((err)=> console.log(err));
};


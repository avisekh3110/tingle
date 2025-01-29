import { config } from "dotenv";

config();

export const username = process.env.username;
export const password = process.env.password;

console.log(username,password);
import { createPool } from "mysql2";

export const database = createPool({
    host:"localhost",
    port:3306,
    user:"root",
    password:"",
    database:"ola"
})
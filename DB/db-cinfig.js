import mysql from "mysql2";

const pool = mysql.createPool({
    user : 'root',
    password : 'W@2915djkq#',
    host : 'localhost',
    connectionLimit : '50',
    database : 'Task_Manager'
})
export default pool;
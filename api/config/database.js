import mysql from 'mysql'


const databaseConnection = mysql.createPool({
    host:'localhost',
    user:"root",
    password:"",
    database:"EasyShopping"
})
export default databaseConnection;
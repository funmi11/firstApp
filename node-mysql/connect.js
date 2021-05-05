var mysql = require('mysql');
let connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'todoapp'

});
connection.connect((err) => {
 if(err){
     console.log(err);
 }
    console.log("connected successfully");'' 
});
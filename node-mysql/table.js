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
 } else{
     let query = 'CREATE TABLE IF NOT EXISTS todos(id INT PRIMARY KEY AUTO_INCREMENT,title VARCHAR(255) NOT NULL,completed TINYINT(1) NOT NULL DEFAULT 0)';
     connection.query(query,(err, result, fields) => {
        if(err){
            console.log(err.message);
        } else {
             console.log(result);
        }
     });
    console.log("connected successfully");
 }
});
var express = require('express');
const mysql = require('mysql');


//自定义模块todoController
var todoController = require('./controller/todoController');


var app = express();

//创建数据库连接
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'db_todoapp',
    multipleStatements: true // 支持执行多条 sql 语句
})
//Connect
db.connect((err) => {
    if(err) throw err;
    console.log("Mysql Connect...");
})

app.set('view engine','ejs');

//整个public模块化 在服务器中展示
app.use(express.static('./public'));

todoController(app,db);

app.listen(3000);

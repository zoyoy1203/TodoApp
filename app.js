var express = require('express');

//自定义模块todoController
var todoController = require('./controller/todoController');


var app = express();

app.set('view engine','ejs');

//整个public模块化 在服务器中展示
app.use(express.static('./public'));

todoController(app);

app.listen(3000);

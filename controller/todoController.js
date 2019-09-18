var bodyParser = require('body-parser');
//对数据进行解析
var urlencodeParser = bodyParser.urlencoded({extended:false});

// var data = [
//     {item:"好好学习！天天向上！"},
//     {item:"明天中午吃什么？"},
//     {item:"还有几节课就没了。。"}
// ];

module.exports = function (app,db) {
    //获取数据
    app.get('/todo',function (req,res) {
        // res.render('todo',{todos:data});
        let sql = 'SELECT * FROM todo_text';
        db.query(sql, (err, result) => {
            if (err) throw err;
            // console.log(result)
            res.render('todo',{todos:result})
        })
    });
    //传递数据
    app.post('/todo',urlencodeParser,function (req,res) {
        // data.push(req.body);
        let text = req.body;
        console.log(text);
        let sql = "INSERT INTO todo_text SET ?";
        db.query(sql, text, (err, result) => {
            if(err) throw err;
            console.log(result);
        })
    });
    // 删除数据
    app.delete('/todo/:id',function (req,res) {
        // console.log(req.params.item);
        // Todo.find({item:req.params.item}).remove(function (err,data) {
        //     if (err) throw err;
        //     res.json(data);
        // })
        // data = data.filter(function (todo) {
        //     return req.params.item !== todo.item;
        // });
        let sql = `DELETE FROM todo_text WHERE ID = ${req.params.id}`;
        db.query(sql, (err, result) => {
            if(err) throw err;
            console.log(result);
            res.json(result);
        })

        // res.json(data);
    });
}

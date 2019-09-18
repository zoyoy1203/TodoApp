var bodyParser = require('body-parser');
//对数据进行解析
var urlencodeParser = bodyParser.urlencoded({extended:false});

var data = [
    {item:"好好学习！天天向上！"},
    {item:"明天中午吃什么？"},
    {item:"还有几节课就没了。。"}
];

module.exports = function (app) {
    //获取数据
    app.get('/todo',function (req,res) {
        res.render('todo',{todos:data});
    });
    //传递数据
    app.post('/todo',urlencodeParser,function (req,res) {
        data.push(req.body);
    });
    // 删除数据
    app.delete('/todo/:item',function (req,res) {
        // console.log(req.params.item);
        // Todo.find({item:req.params.item}).remove(function (err,data) {
        //     if (err) throw err;
        //     res.json(data);
        // })
        data = data.filter(function (todo) {
            return req.params.item !== todo.item;
        });

        res.json(data);
    });
}

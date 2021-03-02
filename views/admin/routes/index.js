var express = require('express');
var router = express.Router();
var dbConnect = require("../db/connect");

/* GET home page. */
router.get('/', function(req, res, next) {
    dbConnect.query("select * from student", function(err, data) {
        if (err) throw err;
        res.render('index', { data: data });
    });
});
//Thêm
router.get("/add", function(req, res) {
    res.render("add");
});

router.post("/add", function(req, res) {
    dbConnect.query(`insert into student (name,email,class) values('${req.body.name}',
    '${req.body.email}','${req.body.class}')`, function(err) {
        if (err) throw err;
        res.redirect("/");
    })
});
//Xóa
router.get("/delete/:id", function(req, res) {
    dbConnect.query(`delete from student where id=${req.params.id}`, function(err) {
        if (err) throw err;
        res.redirect("/");
    })
});
//Sửa
router.get("/edit/:id", function(req, res) {
    var data = dbConnect.query(`select * from student where id=${req.params.id}`, function(err, result) {
        if (err) throw err;
        data = {
            id: result[0].id,
            name: result[0].name,
            email: result[0].email,
            class: result[0].class
        }
        res.render("edit", { data });
    })
});

router.post("/edit", function(req, res) {
    dbConnect.query(`update student set name='${req.body.name}',email='${req.body.email}',
    class='${req.body.class}' where id=${req.body.id}`, function(err) {
        if (err) throw err;
        res.redirect("/");
    })
});
module.exports = router;
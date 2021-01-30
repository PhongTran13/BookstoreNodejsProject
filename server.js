const express = require('express');
const expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const app = express();
const port = 3000;
const fileUpload = require('express-fileupload');
app.use(fileUpload());
const path = require('path');
var mysql = require('mysql');
const { title } = require('process');
//session
app.use(cookieSession({
    name: 'session',
    keys: ['fpoly1', 'fpoly2'],
    maxAge: 3600 * 1000
}));
//create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bookstore',
    multipleStatements: true,
    port: '3306'
});
app.use(bodyParser.urlencoded({ extended: true }));
//khai bao su dung template ejs
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
app.use(expressLayouts);
const routeSite = require('./route/site');
// //const routeAdmin = require('/route/admin');

app.use('/', routeSite);
// //app.use('/',routeAdmin);

//router
app.get('/', (req, res) => {
    // res.render('index');
    let sql = 'SELECT* FROM products';
    db.query(sql, function(err, data) {
        // if (err) throw err;?
        res.render('index', { products: data });
    })
})
app.get('/about', (req, res) => {
    res.render('about');
})

app.get("/shop", (req, res) => {
    let sql = 'SELECT* FROM products limit 9';
    db.query(sql, function(err, data) {
        // if (err) throw err;?
        res.render('shop', { products: data });
    })
});
app.get('/blog', (req, res) => {
    res.render('blog');
})
app.get('/news', (req, res) => {
    res.render('news');
})
app.get('/book-detail', (req, res) => {
    // res.render('book-detail');
    let sql = 'SELECT* FROM products';
    db.query(sql, function(err, data) {
        // if (err) throw err;?
        res.render('book-detail', { products: data });
    })
})
app.get('/cart', (req, res) => {
    res.render('cart');
})
app.get('/checkout', (req, res) => {
    res.render('checkout');
})
app.get('/order-recieved', (req, res) => {
    res.render('order-recieved');
})
app.get('/contact', (req, res) => {
    res.render('contact');
})
app.get('/grid-view', (req, res) => {
    // res.render('grid-view');
    let sql = 'SELECT* FROM products limit 9';
    db.query(sql, function(err, data) {
        // if (err) throw err;?
        res.render('grid-view', { products: data });
    })
})
app.get('/list-view', (req, res) => {
    // res.render('list-view');
    let sql = 'SELECT* FROM products limit 5';
    db.query(sql, function(err, data) {
        // if (err) throw err;?
        res.render('list-view', { products: data });
    })
})
app.get('/shortcodes', (req, res) => {
    res.render('shortcodes');
})
app.get('/order - recieved', (req, res) => {
    res.render('order - recieved');
})
app.listen(port, () => {
    console.log(`Hello!!! Server đang chạy port: ${port} ngon lành :)`);
});
const User = require('../model/user');
var bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
exports.login = (req, res) => {
    res.render('login');
}

exports.register = (req, res, next) => {
        //check loi- validation result
        //doc form
        const { username, password, email, phone, birthday, fullname, address } = req.body;
        //neu validation result khong loi
        bcrypt.hash(password, 12).then((hash_pass) => {
            //insert
            const user = new User({ username: username, password: password, email: email, phone: phone, birthday: birthday, fullname: fullname, address: address });
            user
                .save()
                .then(result => {
                    res.send('You account has been create successfully, Now you can <a href="/login">Login</a>');
                })
                .catch(err => {
                    //xuat loi
                    if (err) throw err;
                })
        })
    }
    // const path = require('path');
    // const cookieSession = require('cookie-session');
    // const fileUpload = require('express-fileupload');
    // var server = express();
    // const port = 3000;
    // server.use(bodyParser.urlencoded({ extended: true }));
    // server.use(fileUpload());
    // server.use(cookieSession({
    //     name: 'session',
    //     keys: ['fptPoly1', 'fptPoly2'],
    //     maxAge: 3600 * 1000
    // }));
    // server.set("view engine", "ejs");

// exports.login = (req, res, next) => {
//     //check loi- validation result
//     //doc form
//     const { user_email, user_pass } = req.body;
//     User.findAll({ while: { user_email: user_email } }).then(result => {
//         if (result.length > 0) {
//             bcrypt.compare(user_pass, result[0].user_pass).then(compare_result => {
//                 if (compare_result === true) {
//                     req.session.isLoggedIn = true;
//                     req.session.userID = result[0].user_id;
//                     req.redirect('product');
//                 } else {
//                     console.log('fail!!!!!');
//                     res.render('login', { login_errors: ['Invalid Password'] })
//                 }
//             })
//         }
//     }).catch(err => {
//         if (err) throw err;
//     })
// }
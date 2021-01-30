const User = require('../model/user');
var bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
exports.login = (req, res) => {
    res.render('checkout');
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
                res.send('You account has been create successfully, Now you can <a href="/checkout">Login</a>');
            })
            .catch(err => {
                //xuat loi
                if (err) throw err;
            })
    })
}
exports.login1 = (req, res, next) => {
    //check loi- validation result
    //doc form
    const { user_email, user_pass } = req.body;
    User.findAll({ while: { user_email: user_email } }).then(result => {
        if (result.length > 0) {
            bcrypt.compare(user_pass, result[0].user_pass).then(compare_result => {
                if (compare_result === true) {
                    req.session.isLoggedIn = true;
                    req.session.userID = result[0].user_id;
                    req.redirect('product');
                } else {
                    console.log('fail!!!!!');
                    res.render('checkout', { login_errors: ['Invalid Password'] })
                }
            })
        }
    }).catch(err => {
        if (err) throw err;
    })
}
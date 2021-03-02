// const User = require('../models/user.js');
// const bcrypt =require('bcryptjs');
// const jwt = require('jsonwebtoken');

// exports.createUser = (req, res, next) => {

//     const email = req.body.email;
//     const password = req.body.password;
//     const confirmPassword = req.body.confirmPassword;
//     const typeUser = req.body.typeUser;

//     console.log(email);

//     User.findOne({where: {email: email}})
//     .then(user =>{
//         if(user){
//             console.log(user.email);
//             return res.status(400).json({message: "Email da ton tai"});
//         }
//         return bcrypt.hash(password, 12);
//     })
//     .then(hashedPassword=>{
//         const user = new User({email:email, password:hashedPassword, typeUser:typeUser});
//         return user.save();
//     })
//     .then(user=>{
//         res.status(200).json({
            
//             message:'Them thanh công thành viên',
//             user:user
//         });
//     })
//     .catch(err => res.status(400).json(err))
// };

const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

exports.createUser = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  const typeUser = req.body.idUser;
  console.log(email);
  User.findOne({where: { email: email }})
  .then(user => {
    if (user) {
      console.log(user.email);
      return res.status(400).json({message:"Email da ton tai"});
    }
    return bcrypt.hash(password, 12);
    })
  .then(hashedPassword=>{
    const user = new User({ email: email, 
      password: hashedPassword,typeUser:typeUser });
    return user;
  })
  .then(user => {
      res.status(201).json({
        message: 'Thêm thành công thành viên!',
        user: user
      });
    })
  .catch(err => res.status(400).json(err))
};


exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  
  User.findOne({where: { email: email }})
  .then(user => {
    if (!user) {
      return res.status(400).json({message:"Email khong ton tai"});
    }
    return Promise.all([bcrypt.compare(password, user.password),user]);
    })
  .then(result=>{
    const isMatch=result[0];
    const user=result[1];
    
    if(!isMatch) return res.status(400).json({message:"Password khong khop"})
    const payload={
      email:user.email,
      typeUser:user.typeUser
    }
    return jwt.sign({payload}, "mk");
  })
  .then(token=>{
    //res.status(200).json({message:"Login thanh cong",accessToken:token})
    res.cookie("token",token)
    res.direct("/");
  })
  .catch(next())
};

exports.testAuth = (req, res, next) => {
  res.status(200).json({
    message:"Da login",
    user:req.user
  })
}
 const Product = require('../model/product');

exports.getAll = (req, res) =>{
    //doc database
     Product.findAll().then(products=>{
         res.render('product',{products:products,catalogs:[]})
     })
     .catch(err=>console.log(err))
    //res.render('product',{products:[], catalogs:[] });
}
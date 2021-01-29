const Sequelize = require('sequelize');

const sequelize = new Sequelize('bookstore', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
});
//ORM
const Product = sequelize.define('products', {
    idProducts: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nameProducts: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cost: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    images: {
        type: Sequelize.STRING,
        allowNull: false,
    }

}, { timestamps: false });
module.exports = Product;
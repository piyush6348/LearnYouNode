
const sequelize = require('sequelize')

// dialect is type of db used eg postgress, mysql etc.
const db = new sequelize({
    host: 'localhost',
    database: 'somedatabase',
    username: 'someuser',
    password: 'somepass',
    dialect: 'mysql',
    storage: './'
});

// a table is created if not present already
// but if it is defined then it is used


const productMaster = db.define('productMaster',{
    pId:{
        type: sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pName: sequelize.DataTypes.STRING,
    pPrice: sequelize.DataTypes.INTEGER
});

const salesMaster = db.define('salesMaster',{
    /*
    id:{
        type:sequelize.DataTypes.INTEGER,
        primaryKey:true
    },*/
    qty: sequelize.DataTypes.INTEGER
})

salesMaster.belongsTo(productMaster,{foreignKey:'id', targetKey:'pId'});


db.sync({alter:true}).then(function () {
    console.log("Database is ready");
})

module.exports ={
    productTable: productMaster,
    salesTable: salesMaster
}

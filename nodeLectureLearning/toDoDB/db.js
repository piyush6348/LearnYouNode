
const sequelize = require('sequelize');

// dialect is type of db used eg postgress, mysql etc.
const db = new sequelize({
    host: 'localhost',
    database: 'somedatabase',
    username: 'someuser',
    password: 'somepass',
    dialect: 'mysql'
});

// a table is created if not present already
// but if it is defined then it is used

const ToDosTable = db.define('todos',{
    id:{
        type: sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        /*,
        set(val){
            this.setDataValue('id',val);
        }*/
    },
    task: sequelize.DataTypes.STRING,
    done: sequelize.DataTypes.BOOLEAN,
    position: sequelize.DataTypes.INTEGER
});

db.sync({force:true}).then(function () {
    console.log("Database is ready");
})

module.exports = ToDosTable;
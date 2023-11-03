// create models

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("postgres://postgres:0000@localhost:5432/tododb");

const Todo = sequelize.define("Todo", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {  // maybe create model for status
        type: DataTypes.INTEGER,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING
    }
})

const models = [
    Todo
];

module.exports = {
    sequelize,
    models
}
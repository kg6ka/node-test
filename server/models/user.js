const SequelizeBase = require('sequelize');
const sequelize = require('./../utils/sequelize');

const Users = sequelize.define('user', {
    id: {
        type: SequelizeBase.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    password: {
        type: SequelizeBase.STRING,
        field: 'password'
    },
    name: {
        type: SequelizeBase.STRING,
        field: 'name'
    },
    birthday: {
        type: SequelizeBase.INTEGER,
        field: 'birthday'
    },
    email: {
        type: SequelizeBase.STRING,
        field: 'email',
        allowNull: true,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    dateRegistration: {
        type: SequelizeBase.INTEGER,
        field: 'dateRegistration'
    },
    lastUsing: {
        type: SequelizeBase.INTEGER,
        field: 'lastUsing'
    }
}, {
    freezeTableName: true,
    timestamps: false
});

Users.beforeCreate(function (model, done) {
    model.dateRegistration = Math.floor(Date.now() / 1000);
    model.lastUsing = Math.floor(Date.now() / 1000);
});

module.exports = Users;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type:String, required:true},
    fullname: {type:String, required:true},
    followers: {type:Number, required:true}
});

const Users = mongoose.model('users', userSchema, 'users');
const mySchemas = {'Users':Users};

module.exports = mySchemas;
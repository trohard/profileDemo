const mongoose = require('mongoose');

const Profile = new mongoose.Schema({
    firstName: {type:String, trim:true, min:1, default:''},
    lastName: {type:String, trim:true, min:1, default:''},
    school: {type:String, trim:true, default:''},
    city: {type:String, trim:true, default:''},
    state: {type:String, trim:true, default:'KS'},
    interests: {type:String, trim:true, default:''},
})

module.exports = mongoose.model('Profile', Profile)
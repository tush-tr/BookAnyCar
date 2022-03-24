const User = require("../models/User");
module.exports = async (username)=>{
    const userFound = User.find({user:username})
    if(userFound){
        return false
    }

}
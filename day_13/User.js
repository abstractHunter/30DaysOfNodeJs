const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: String
});

async function createUser(data) {
    try {
        let user = await User.create(data);
        await user.save();
        console.log(user);
    } catch (e) {
        console.log(e.message);
    }
};

async function findUser(username) {
    try {
        let user = await User.findOne({ username: username });
        // console.log("found user : " + user);
        return user;
    } catch (e) {
        console.log(e.message);
        return null;
    }
}

const User = mongoose.model("User", userSchema)

module.exports = {
    createUser,
    findUser
};
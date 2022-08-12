const mongoose = require("mongoose");
const User = require("./User");

// connect to database testdb1 on localhost
mongoose.connect(
    "mongodb://localhost/testdb1",
    () => {
        console.log("Connected");
    },
    e => { console.log(e); }
);

// create();
read();
// update();
// deletion();

async function create() {
    try {
        // this user is only in program and not in the db yet
        const user1 = await User({
            name: "Kate",
            age: 19,
            email: "hello@hi.un",
            hobbies: ["programming", "basketball"],
            address: {
                street: "Baloon St",
                city: "Koohaf"
            }
        });
        // we have to use .save method to save it to the database
        await user1.save();
        console.log(user1);
    } catch (e) {
        console.log(e.message);
    }
};

async function read() {
    try {
        const user = await User.findOne({ name: "Kate" }); // returns the first occurrence
        console.log(user);

        const users = await User.find({ name: "Kate" }); // returns all matches
        console.log(users);

        const allusers = await User.find(); // returns all users
        console.log(allusers);
        const gt21 = await User.where("age").gt(21).where("name").equals("Kate"); // age > 21 and name == "Kate"
    } catch (e) {
        console.log(e.message);
    }
}

async function update() {
    try {
        const user = await User.findOne({ name: "Kate" });
        console.log(user);
        user.update({ name: "Elsa" });
        console.log(user);
    } catch (e) {
        console.log(e.message);
    }
}

async function deletion() {
    try {
        await User.deleteMany({ name: "Kate" }); // delete all with name == "Kate"
        await User.deleteOne({ name: "Sasha" }); // delete first with name == "Sasha"
    } catch (e) {
        console.log(e.message);
    }
}
const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    street: String,
    city: String
})

// creating a schema for users
const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 1, // minimun value authorised is 1
        max: 100 // maximun value authorised is 100
    },
    email: {
        type: String,
        required: true, // email is required
        lowercase: true, // automatically cast email to lowercase
        validate: {
            validator: v => v.includes("@"),
            message: props => `${props.value} is not a valid email`
        }
    },
    createdAt: {
        type: Date,
        immutable: true, // cannot be modified
        default: () => Date.now(), // default value generated as current date at creation
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(), // default value generated as current date at creation
    },
    bestFriend: mongoose.SchemaTypes.ObjectId, // id of an instance of the same object
    hobbies: [String], // array of String 
    address: addressSchema,
    /* address: { // another object
        street: String,
        city: String
    } */
});

// creating a model for userSchema
module.exports = mongoose.model("User", userSchema);
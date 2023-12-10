const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        default: "-"
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true,
        unique: true
    },
    address: {
        type: String
    },
    gender: {
        type: String,
        default: "Prefer not to say"
    },
    roll: {
        type: String,
        required: true,
    }
}, {
    timestamps: true 
});

const User = model("User", userSchema);

module.exports = User;

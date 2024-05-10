const mongoose = require("mongoose");
const { type } = require("os");

const cabSchema = new mongoose.Schema({
    price: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },
    modelNumber: {
        type: String,
        required: true
    },
    vName: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    doors: {
        type: String,
        required: true
    },
    air: {
        type: Boolean,
        required: true
    },
    transmission: {
        type: String,
        required: true
    },
    fuel: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model("cab", cabSchema);
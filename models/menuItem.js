const mongoose = require("mongoose");

const MenuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    menu: { type: mongoose.Schema.Types.ObjectId, ref: "Menu" }
});

module.exports = mongoose.model("MenuItem", MenuItemSchema);

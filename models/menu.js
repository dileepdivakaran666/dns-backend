const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "MenuItem" }]
});

module.exports = mongoose.model("Menu", MenuSchema);

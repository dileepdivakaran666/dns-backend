const MenuItem = require("../models/menuItem");

const editMenuItem = async (id,{ name, description, price }) => {
    const updatedMenuItem = await MenuItem.findByIdAndUpdate(
        id,
        { name, description, price },
        { new: true } // Return the updated document
    );
    return updatedMenuItem
};

const deleteMenuItem = async (id) => {
    const updatedMenuItem = await MenuItem.findByIdAndDelete(id);
    return updatedMenuItem
};

module.exports = {editMenuItem, deleteMenuItem}
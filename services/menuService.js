const Menu = require("../models/menu");
const menuItem = require("../models/menuItem");
const MenuItem = require("../models/menuItem");

const createMenu = async (name, description) => {
    return await new Menu({ name, description }).save();
};

const getAllMenus = async () => {
    return await Menu.find().populate("items");
};

const getMenuById = async (id) => {
    return await Menu.findById(id).populate("items");
};

const addItemToMenu = async (menuId, itemData) => {
    const newItem = await new MenuItem({ ...itemData, menu: menuId }).save();
    await Menu.findByIdAndUpdate(menuId, { $push: { items: newItem._id } });
    return newItem;
};

const deleteMenuById = async (id) => {
   const deletedItem = await Menu.findByIdAndDelete(id)
   if (!deletedItem) {
    throw new Error("Menu not found");
}
   await MenuItem.updateMany({ menu: id }, { $unset: { menu: "" } });
    return deletedItem
};

module.exports = { createMenu, getAllMenus, getMenuById, addItemToMenu, deleteMenuById };

const Menu = require("../models/menu");
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
    return await Menu.findByIdAndDelete(id)
};

module.exports = { createMenu, getAllMenus, getMenuById, addItemToMenu, deleteMenuById };

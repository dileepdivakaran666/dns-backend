const menuService = require("../services/menuService");

const createMenu = async (req, res) => {
    try {
        const { name, description } = req.body;
        const menu = await menuService.createMenu(name, description);
        res.status(201).json(menu);
    } catch (error) {
        res.status(500).json({ error: "Error creating menu" });
    }
};

const getAllMenus = async (req, res) => {
    try {
        const menus = await menuService.getAllMenus();
        res.json(menus);
    } catch (error) {
        res.status(500).json({ error: "Error fetching menus" });
    }
};

const getMenuById = async (req, res) => {
    try {
        const menu = await menuService.getMenuById(req.params.id);
        res.json(menu);
    } catch (error) {
        res.status(500).json({ error: "Error fetching menu" });
    }
};

const addItemToMenu = async (req, res) => {
    try {
        const { name, description, price } = req.body;
        const menuItem = await menuService.addItemToMenu(req.params.menuId, { name, description, price });
        res.status(201).json(menuItem);
    } catch (error) {
        res.status(500).json({ error: "Error adding item" });
    }
};

const deletemenu = async(req,res)=>{
    try{
        const deletedItem = await menuService.deleteMenuById(req.params.menuId)
        res.status(201).json(deletedItem);
    }catch (error) {
        res.status(500).json({ error: "Error deleting item" });
    }
}
module.exports = { createMenu, getAllMenus, getMenuById, addItemToMenu, deletemenu };

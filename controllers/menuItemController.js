
const menuItemService = require("../services/menuItemService");

const editMenuById = async (req, res) => {
    try {
        const { name, description, price } = req.body;
        const menuItem = await menuItemService.editMenuItem(req.params.id, { name, description, price });
        res.status(201).json(menuItem);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Error updating MenuItem" });
    }
};

const deleteMenuById = async (req, res) => {
    try {
        const menuItem = await menuItemService.deleteMenuItem(req.params.id);
        res.status(201).json(menuItem);
    } catch (error) {
        res.status(500).json({ error: "Error deleting MenuItem" });
    }
};
module.exports = {editMenuById, deleteMenuById}
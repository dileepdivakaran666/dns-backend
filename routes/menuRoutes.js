const express = require("express");
const menuController = require("../controllers/menuController");
const {authMiddleware, adminMiddleware} = require('../middlewares/authMiddleware')

const router = express.Router();

// Define Routes
router.post("/",authMiddleware, adminMiddleware, menuController.createMenu);
router.get("/", menuController.getAllMenus);
router.get("/:id", menuController.getMenuById);
router.post("/:menuId/items",authMiddleware, adminMiddleware, menuController.addItemToMenu);
router.delete('/:menuId',authMiddleware, adminMiddleware, menuController.deletemenu)

module.exports = router;

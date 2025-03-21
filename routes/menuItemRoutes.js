const express = require("express");
const menuItemController = require('../controllers/menuItemController')
const {authMiddleware, adminMiddleware} = require('../middlewares/authMiddleware')

const router = express.Router();

// Define Routes
router.put("/:id",authMiddleware, adminMiddleware, menuItemController.editMenuById);
router.delete('/:id',authMiddleware, adminMiddleware, menuItemController.deleteMenuById)


module.exports = router;

const express = require("express");
const router = express.Router();

const orderController = require("../controller/adminOrderController");
const aunthenticate = require("../middleware/authenticate");

router.get("/",aunthenticate,orderController.getAllOrders);
router.put("/:orderId/confirmed",aunthenticate,orderController.confirmedOrders);
router.put("/:orderId/ship",aunthenticate,orderController.shipOrders);
router.put("/:orderId/deliver",aunthenticate,orderController.deliverOrders);
router.put("/:orderId/cancel",aunthenticate,orderController.cancelOrders);
router.put("/:orderId/delete",aunthenticate,orderController.deleteOrders);

module.exports=router;
const express = require("express");
const router = express.Router();
const orderService = require("../service/orderservice");

router.get("/", async (req, res) => {
  try {
    var orderList = await orderService.getAllOrders();
    res.json(orderList).status(200);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    var order = await orderService.getOrderbyId(req.params.id);
    if (!order) {
      res.status(404).json({ message: "Order not found" });
    } else {
      res.json(order).status(200);
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.post("/", async (req, res) => {
  try {
    const result = await orderService.createOrder(req.body);
    res.status(200).json({ statusCode: 200, message: result });
  } catch (error) {
    res.status(500).send({ message: "Something went wrong" });
  }
});
router.put("/:id", async (req, res) => {
  try {
    var isExist = await orderService.getOrderbyId(req.params.id);
    if (!isExist) {
      res.status(404).send({ message: "Order not found" });
      return;
    }
    const result = await orderService.updateOrder(req.params.id, req.body);
    res.status(200).json({ message: { result } });
  } catch (error) {
    res.status(500).send({ message: "Something went wrong" });
  }
});

module.exports = router;

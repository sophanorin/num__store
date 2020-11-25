import express from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";
import { isAuth } from "../utils.js";

const orderRouter = express.Router();

orderRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    console.log(req.user);
    if (req.body.cartItems.length === 0) {
      res.status(400).send({ message: "Cart is empty" });
    } else {
      const order = new Order({
        orderItems: req.body.cartItems,
        paymentMethod: req.body.paymentMethod,
        itemsPrice: req.body.itemsPrice,
        taxPrice: req.body.taxPrice,
        deliveryPrice: req.body.deliveryPrice,
        totalPrice: req.body.totalPrice,
        user: req.user._id,
      });
      const createdOrder = await order.save();
      res
        .status(201)
        .send({ messages: "New Order Created", order: createdOrder });
    }
  })
);

orderRouter.get(
  "/:id?",
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) res.send(order);
    else res.status(404).send({ messages: "Order not found" });
  })
);

export default orderRouter;

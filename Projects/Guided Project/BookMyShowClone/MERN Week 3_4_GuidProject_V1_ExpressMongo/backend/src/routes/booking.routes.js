const express = require("express");
const router = express.Router();
const showController = require("../controllers/show.controller");

const {protect} = require("../middleware/auth.middleware");

// User booking route
router.post("/",protect,bookingController.createBooking);
router.get("/my",protect,bookingController.getMyBookings);
router.post("/:id",protect,bookingController.cancelBooking);

module.exports = router;


// Created the movie booking route with auth middleware
//Added routes for create,get & cancel booking
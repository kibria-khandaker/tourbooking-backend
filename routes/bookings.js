import express from 'express';
import { createBooking, getAlBooking, getBooking } from '../controllers/bookingController.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

router.post("/", verifyUser, createBooking);
router.get("/:id", verifyUser, getBooking);
router.get("/", verifyAdmin, getAlBooking);



export default router;
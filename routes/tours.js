import express from 'express';
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour } from '../controllers/tourController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router()

// create new tour
router.post('/',verifyAdmin, createTour);

// update tour
router.put('/:id', verifyAdmin,updateTour);

// delete tour
router.delete('/:id', verifyAdmin,deleteTour);

// getSingle tour
router.get('/:id', getSingleTour);

// getAll tour
router.get('/', getAllTour);

// get Tour By Search
router.get('/search/getTourBySearch', getTourBySearch);

// get Featured tour
router.get('/search/getFeaturedTours', getFeaturedTour);

// get Count tour
router.get('/search/getTourCount', getTourCount);


export default router;

import express from 'express';
import { getAllUser, deleteUser, getFeaturedUser, updateUser } from '../controllers/userController.js';
const router = express.Router()


// create new tour
// router.post('/', createTour);

// update tour
router.put('/:id', updateUser);

// delete tour
router.delete('/:id', deleteUser);

// getSingle tour
router.get('/:id', getFeaturedUser);

// getAll tour
router.get('/', getAllUser);

// // get Tour By Search
// router.get('/search/getTourBySearch', getTourBySearch);

// // get Featured tour
// router.get('/search/getFeaturedTours', getFeaturedTour);

// // get Count tour
// router.get('/search/getTourCount', getTourCount);


export default router;

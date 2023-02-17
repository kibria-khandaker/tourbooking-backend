import express from 'express';
import { getAllUser, deleteUser, getFeaturedUser, updateUser } from '../controllers/userController.js';
const router = express.Router()


// create new User
// router.post('/', createUser);

// update User
router.put('/:id', updateUser);

// delete User
router.delete('/:id', deleteUser);

// getSingle User
router.get('/:id', getFeaturedUser);

// getAll User
router.get('/', getAllUser);

// // get User By Search
// router.get('/search/getUserBySearch', getUserBySearch);

// // get Featured User
// router.get('/search/getFeaturedUsers', getFeaturedUser);

// // get Count User
// router.get('/search/getUserCount', getUserCount);


export default router;

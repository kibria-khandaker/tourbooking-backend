import express from 'express';
import { getAllUser, deleteUser, getFeaturedUser, updateUser } from '../controllers/userController.js';
import { verifyAdmin, verifyUser } from './../utils/verifyToken.js';
const router = express.Router()


// create new User
// router.post('/', createUser);

// update User
router.put('/:id', verifyUser,updateUser);

// delete User
router.delete('/:id',verifyUser, deleteUser);

// get single User
router.get('/:id', verifyUser,getFeaturedUser);

// getAll User
router.get('/', verifyAdmin, getAllUser);


export default router;

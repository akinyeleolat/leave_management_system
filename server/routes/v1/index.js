import express from 'express';
import user from './user';
import plateNumber from './platenumber';


const router = express.Router();
router.use('/user', user);
router.use('/plates', plateNumber);

export default router;

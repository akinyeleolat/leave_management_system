import express from 'express';
import addUser from '../../controllers/user';

import validateUser from '<validations>/user';

const router = express.Router();

router.post('/', validateUser, addUser);
export default router;

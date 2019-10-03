import express from 'express';
import { getPlateNumber, addPlateNumber } from '../../controllers/platenumber';
import validatePlatesDetails from '<validations>/plate';

const router = express.Router();

router.get('/', getPlateNumber);
router.post('/', validatePlatesDetails, addPlateNumber);

export default router;

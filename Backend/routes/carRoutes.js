import express from 'express';
import { addCar  } from '../controllers/carController.js';
const router = express.Router();


router.post('/addcar', addCar);


export default router;

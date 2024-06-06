import express from 'express';
import { createResponse, getResponses } from '../controllers/responseController.js';
import authenticateUser from '../middleware/auth.js';

const router = express.Router();

router.route('/').post(authenticateUser, createResponse);
router.route('/all').get(authenticateUser, getResponses);

export default router;

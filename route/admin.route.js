import express from 'express';
import { signUpPage , signUp } from '../controller/admin.controller.js';

const router = express.Router();

router.get('/sign-up',signUpPage);
router.post('/sign-up',signUp);
export default router;
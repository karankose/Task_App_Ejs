import express from 'express';
import { signUpPage , signUp } from '../controller/admin.controller.js';

const router = express.Router();
router.get('/',(req,res)=>{
    res.send('<h1>this is my admin router </h1>')
})
router.get('/sign-up',signUpPage);
router.post('/sign-up',signUp);
export default router;
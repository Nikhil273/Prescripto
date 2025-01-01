import express from 'express';
import { addDoctor, loginAdmin } from '../controllers/admin.controller.js';
import upload from '../middlewares/multer.js';
import authAdmin from '../middlewares/auth.admin.js';

const adminRouter = express.Router();

adminRouter.post('/add-doctor', authAdmin, upload.single('image'), addDoctor);
adminRouter.post('/login', loginAdmin);


export default adminRouter;
//Import tools
import { Router } from 'express';
import { adminAuth } from '../middleware/adminAuth';
import fs from 'fs-extra';
import fileUpload from 'express-fileupload';
import {
    getAllCourse,
    getCourse,
    createCourse,
    deleteCourse,
    updateCourse,
} from '../controllers/courseControllers';

//Define router
const coursesRouter = Router();

//Routes
coursesRouter.get('/all', getAllCourse);

coursesRouter.post(
    '/',
    fileUpload({
        useTempFiles: true,
        tempFileDir: './uploads',
    }),
    adminAuth,
    createCourse
);

coursesRouter.get('/:id', getCourse);

coursesRouter.delete('/:id', adminAuth, deleteCourse);

coursesRouter.put('/:id', adminAuth, updateCourse);

//Export routes
export default coursesRouter;

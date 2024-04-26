//Import tools
import { Router } from 'express';
import { adminAuth } from '../middleware/adminAuth';
import fs from 'fs-extra';
import fileUpload from 'express-fileupload';
import {
    getAllPost,
    getPost,
    createPost,
    deletePost,
    updatePost,
} from '../controllers/postControllers';

//Define router
const postRouter = Router();

//Routes
postRouter.get('/all', getAllPost);

postRouter.post(
    '/',
    fileUpload({
        useTempFiles: true,
        tempFileDir: './uploads',
    }),
    adminAuth,
    createPost
);

postRouter.get('/:id', getPost);

postRouter.delete('/:id', adminAuth, deletePost);

postRouter.put('/:id', adminAuth, updatePost);

//Export routes
export default postRouter;

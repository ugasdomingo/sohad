// Import tools
import { PostModel } from '../models/Post';
import { uploadImage, deleteImage } from '../utils/cloudinary';
import fs from 'fs-extra';

// getAllPost --> Line 10
// createPost --> Line 20
// getPost --> Line 34
// deletePost --> Line 47
// updatePost --> Line 60

// getAllPost Controller
export const getAllPost = async (req: any, res: any) => {
    try {
        const posts = await PostModel.find();
        return res.status(200).json({ posts });
    } catch (error: any) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

// createPost Controller
export const createPost = async (req: any, res: any) => {
    try {
        const { title, content } = req.body;

        const post = new PostModel({
            title,
            content,
        });

        if (req.files?.coverImage) {
            const result = await uploadImage(req.files.coverImage.tempFilePath);
            post.coverImage = {
                public_id: result.public_id,
                secure_url: result.secure_url,
            };

            await fs.unlink(req.files.coverImage.tempFilePath);
        }

        console.log(req.files);
        await post.save();

        res.status(201).json({ post });
    } catch (error: any) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

// getPost Controller
export const getPost = async (req: any, res: any) => {
    try {
        const post = await PostModel.findById(req.params.id);
        return res.status(200).json({ post });
    } catch (error: any) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

// deletePost Controller
export const deletePost = async (req: any, res: any) => {
    try {
        const post = await PostModel.findByIdAndDelete(req.params.id);

        if (post?.coverImage) {
            await deleteImage(post.coverImage.public_id);
            return res.status(200).json({ message: 'Post deleted' });
        }

        return res.status(404).json({ message: 'Post not found' });
    } catch (error: any) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

// updatePost Controller
export const updatePost = async (req: any, res: any) => {
    try {
        const updatedPost = await PostModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        return res.status(200).json({ updatedPost });
    } catch (error: any) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

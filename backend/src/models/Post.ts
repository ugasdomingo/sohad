// Import tools
import { Schema, model } from 'mongoose';

//Create Post Schema
const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },

        coverImage: {
            public_id: {
                type: String,
                required: true,
            },
            secure_url: {
                type: String,
                required: true,
            },
        },
    },
    { timestamps: true }
);

export const PostModel = model('Post', postSchema);

export interface IPost {
    title: string;
    content: string;
    coverImage: {
        public_id: string;
        secure_url: string;
    };
    createdAt: string;
    updatedAt: string;
}

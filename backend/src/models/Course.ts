// Import tools
import { Schema, model } from 'mongoose';

//Create Course Schema
const courseSchema = new Schema(
    {
        courseName: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        initialDate: {
            type: String,
            required: true,
        },
        duration: {
            type: String,
        },
        price: {
            type: String,
            required: true,
        },
        location: {
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
        videoUrl: {
            type: String,
        },
    },
    { timestamps: true }
);

export const CourseModel = model('Course', courseSchema);

export interface ICourse {
    _id: string;
    courseName: string;
    description: string;
    initialDate: string;
    duration: string;
    price: string;
    location: string;
    coverImage: {
        public_id: string;
        secure_url: string;
    };
    videoUrl: string;
}

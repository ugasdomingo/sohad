// Import tools
import { Schema, model } from 'mongoose';

//Create Course Schema
const courseSchema = new Schema({
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
});

export default model('Course', courseSchema);

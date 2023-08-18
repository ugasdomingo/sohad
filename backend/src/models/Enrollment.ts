// Import tools
import { Schema, model } from 'mongoose';

//Create Enrollment Schema
const enrollmentSchema = new Schema({
    date: {
        type: Date,
        requiered: true,
    },
    cid: {
        type: Schema.Types.ObjectId,
        ref: 'Formationss',
        required: true,
    },
    courseName: {
        type: String,
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    paymentProof: {
        public_id: {
            type: String,
            required: true,
        },
        secure_url: {
            type: String,
            required: true,
        },
    },
    payed: {
        type: Boolean,
        default: false,
    },
    uid: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

export default model('Enrollments', enrollmentSchema);

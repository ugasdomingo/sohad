//Import tools
import Enrollment from '../models/Enrollment';
import { uploadImage, deleteImage } from '../utils/cloudinary';
import fs from 'fs-extra';

// getAllEnrollment --> Line 10
// createEnrollment --> Line 20
// getEnrollment --> Line 34
// deleteEnrollment --> Line 47
// updateEnrollment --> Line 60

// getAllEnrollment Controller
export const getAllEnrollment = async (req: any, res: any) => {
    try {
        const enrollments = await Enrollment.find();
        res.status(200).json({ enrollments });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// createEnrollment Controller
export const createEnrollment = async (req: any, res: any) => {
    try {
        const { courseName, cid, paymentMethod } = req.body;

        const enrollments = new Enrollment({
            cid,
            courseName,
            paymentMethod,
            uid: req.uid,
        });

        const date = new Date(Date.now());
        enrollments.date = date;

        if (req.files?.paymentProof) {
            const result = await uploadImage(
                req.files.paymentProof.tempFilePath
            );
            enrollments.paymentProof = {
                public_id: result.public_id,
                secure_url: result.secure_url,
            };

            await fs.unlink(req.files.paymentProof.tempFilePath);
        }
        await enrollments.save();

        res.status(201).json({ enrollments });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// getEnrollment Controller
export const getEnrollment = async (req: any, res: any) => {
    try {
        const enrollments = await Enrollment.findById(req.params.id);

        if (!enrollments)
            return res
                .status(404)
                .json({ message: 'Enrollment no encontrado' });

        if (req.uid != enrollments?.uid)
            return res.status(401).json({
                message: 'No estás autorizado para ver esta información',
            });

        res.status(200).json({ enrollments });
    } catch (error) {
        return res.status(500).json({ message: 'Formato id inválido' });
    }
};

// deleteEnrollment Controller
export const deleteEnrollment = async (req: any, res: any) => {
    try {
        const enrollments = await Enrollment.findByIdAndDelete(req.params.id);

        if (!enrollments)
            return res
                .status(404)
                .json({ message: 'enrollments no encontrado' });

        await deleteImage(enrollments.paymentProof);

        res.status(200).json({ enrollments });
    } catch (error) {
        return res.status(500).json({ message: 'Formato id inválido' });
    }
};

// updateEnrollment Controller
export const updateEnrollment = async (req: any, res: any) => {
    try {
        const updatedEnrollment = await Enrollment.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedEnrollment)
            return res
                .status(404)
                .json({ message: 'Enrollment no encontrado' });
        res.status(200).json({ updatedEnrollment });
    } catch (error) {
        return res.status(500).json({ message: 'Formato id inválido' });
    }
};

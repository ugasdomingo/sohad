//Import tools
import Course from '../models/Course';
import { uploadImage, deleteImage } from '../utils/cloudinary';
import fs from 'fs-extra';

// getAllCourse --> Line 10
// createCourse --> Line 20
// getCourse --> Line 34
// deleteCourse --> Line 47
// updateCourse --> Line 60

// getAllCourse Controller
export const getAllCourse = async (req: any, res: any) => {
    try {
        const courses = await Course.find();
        return res.status(200).json({ courses });
    } catch (error: any) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

// createCourse Controller
export const createCourse = async (req: any, res: any) => {
    try {
        const {
            courseName,
            description,
            initialDate,
            duration,
            price,
            location,
            videoUrl,
        } = req.body;

        const course = new Course({
            courseName,
            description,
            initialDate,
            duration,
            price,
            location,
            videoUrl,
            uid: req.uid,
        });

        if (req.files?.coverImage) {
            const result = await uploadImage(req.files.coverImage.tempFilePath);
            course.coverImage = {
                public_id: result.public_id,
                secure_url: result.secure_url,
            };

            await fs.unlink(req.files.coverImage.tempFilePath);
        }

        await course.save();

        res.status(201).json({ course });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// getCourse Controller
export const getCourse = async (req: any, res: any) => {
    try {
        const course = await Course.findById(req.params.id);

        if (!course)
            return res.status(404).json({ message: 'Course no encontrado' });
        res.status(200).json({ course });
    } catch (error) {
        return res.status(500).json({ message: 'Formato id inválido' });
    }
};

// deleteCourse Controller
export const deleteCourse = async (req: any, res: any) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id);

        if (!course)
            return res.status(404).json({ message: 'Course no encontrado' });

        await deleteImage(course.coverImage);
        res.status(200).json({ course });
    } catch (error) {
        return res.status(500).json({ message: 'Formato id inválido' });
    }
};

// updateCourse Controller
export const updateCourse = async (req: any, res: any) => {
    try {
        const updatedCourse = await Course.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedCourse)
            return res.status(404).json({ message: 'Course no encontrado' });
        res.status(200).json({ updatedCourse });
    } catch (error) {
        return res.status(500).json({ message: 'Formato id inválido' });
    }
};

// Import Tools
import { UserModel } from '../models/User';
import { generateRefreshToken, generateToken } from '../utils/tokenManager';
import jwt from 'jsonwebtoken';

// Register --> Line 13
// Login --> Line 38
// Refresh --> Line 61
// Logout --> Line 85
// Self --> Line 85
// oneUser --> Line 91
// allUsers --> Line 101

// Register Controller
export const register = async (req: any, res: any) => {
    const { name, email, password } = req.body;

    try {
        //Validate unique user
        const uniqueEmail = await UserModel.findOne({ email });
        if (uniqueEmail)
            return res.status(400).json({ message: 'Usuario ya Existe' });

        //Create new user
        const user = new UserModel({
            name,
            email,
            password,
        });

        await user.save();

        //Email Validation

        //Generate Token & RefreshToken
        const refreshToken = generateRefreshToken(user.id);

        const response = {
            ...generateToken(user.id),
            refreshToken: refreshToken,
            userRole: user.role,
            userName: user.name,
        };
        return res.status(201).json(response);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error en el servidor' });
    }
};

// Login Controller
export const login = async (req: any, res: any) => {
    const { email, password } = req.body;
    try {
        //Validate User
        const user = await UserModel.findOne({ email });
        if (!user)
            return res.status(400).json({ message: 'Credenciales Inválidas' });

        //Validate Password
        const validatePassword = await user.comparePassword(password);
        if (!validatePassword)
            return res.status(400).json({ message: 'Credenciales Inválidas' });

        //Generate Token & RefreshToken

        const refreshToken = generateRefreshToken(user.id);

        const response = {
            ...generateToken(user.id),
            refreshToken: refreshToken,
            userRole: user.role,
            userName: user.name,
        };
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error en el servidor' });
    }
};

// Refresh Controller
export const refresh = async (req: any, res: any) => {
    //Payload for req.uid
    interface JwtPayload {
        uid: string;
    }

    try {
        let refreshTokenCookie = req.headers.authorization;
        refreshTokenCookie = refreshTokenCookie.split(' ')[1];

        if (!refreshTokenCookie)
            throw new Error('Debes hacer login para ver esta página');

        const { uid } = jwt.verify(
            refreshTokenCookie,
            process.env.JWT_REFRESH as string
        ) as JwtPayload;
        const user = await UserModel.findById(uid);

        const refreshToken = generateRefreshToken(uid);
        return res.status(200).json({
            ...generateToken(uid),
            refreshToken: refreshToken,
            userRole: user?.role,
            userName: user?.name,
        });
    } catch (error: any) {
        return res.status(401).json({ message: error.message });
    }
};

// Logout Controller
export const logout = async (req: any, res: any) => {
    res.clearCookie('refreshToken');
    res.status(200).json({ mesage: 'Logout' });
};

// self Controller
export const self = async (req: any, res: any) => {
    //Payload for req.uid
    interface JwtPayload {
        uid: string;
    }
    try {
        let token = req.headers.authorization;
        if (!token) throw new Error('Debes hacer login para ver esta página');
        token = token.split(' ')[1];
        const { uid } = jwt.verify(
            token,
            process.env.JWT_SECRET as string
        ) as JwtPayload;
        return res.status(200).json({ uid });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// User by ID Controller
export const userByID = async (req: any, res: any) => {
    try {
        const user = await UserModel.findById(req.params.id);
        return res.status(200).json({ name: user?.name });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};
// User by Mail Controller
export const userByEmail = async (req: any, res: any) => {
    try {
        const user = await UserModel.findOne({ email: req.params.email });
        return res.status(200).json({ name: user?.name });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// allUsers Controller
export const allUsers = async (req: any, res: any) => {
    try {
        const user = await UserModel.find().lean();
        return res.status(200).json({ user });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

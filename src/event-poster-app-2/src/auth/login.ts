import { Request, Response } from 'express';
import { User } from '../types';
import { findUserByEmail } from './service'; // Assuming a service function to find user
import { generateToken } from './tokenService'; // Assuming a token generation service

export const loginUser = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    try {
        const user: User | null = await findUserByEmail(email);

        if (!user || user.password !== password) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }

        const token = generateToken(user.id);
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
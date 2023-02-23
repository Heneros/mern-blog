import { body } from 'express-validator';

export const loginValidation = [
    body("email", "Wrong format email").isEmail(),
    body("password", "Password must min 5 symbols").isLength({ min: 5 }),
];


export const postCreateValidation = [
    body("title", 'Enter Title').isLength({ min: 3 }).isString(),
    body("text", 'Enter Description').isLength({ min: 3 }).isString(),
    body("imageUrl", 'Wrong url').optional().isString(),
];

export const registerValidation = [
    body('email', 'Wrong format email').isEmail(),
    body('password', 'Password mist be min 5 symbols').isLength({ min: 5 }),
    body('fullName', 'Name is not valid.').isLength({ min: 3 }),
    body('avatarUrl', 'Wrong format url').optional().isURL()
];
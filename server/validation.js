import { body } from 'express-validator';

export const postCreateValidation = [
    body("title", 'Enter Title').isLength({ min: 3 }).isString(),
    body("text", 'Enter Description').isLength({ min: 3 }).isString(),
    body("imageUrl", 'Wrong url').optional().isString(),
];
import { body } from 'express-validator';

export const postCreateValidation = [
    body("name", 'Enter Name').isLength({ min: 3 }).isString(),
    body("description", 'Enter Description').isLength({ min: 3 }).isString(),
    body("imageUrl", 'Wrong ling').optional().isString(),
];
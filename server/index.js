
import cors from "cors";
import express from "express";
import fs from "fs";
import * as dotenv from 'dotenv';
import { connectDB } from "./config/db.js";
import { postCreateValidation, registerValidation, loginValidation } from "./validation.js";
import { handleValidationErrors, checkAuth } from './utils/index.js';
import { PostController, UserController } from './controllers/index.js';
import multer from "multer";


dotenv.config()



const port = process.env.PORT || 5000;


const app = express();

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        if (!fs.existsSync('uploads')) {
            fs.mkdirSync('uploads');
        }
        cb(null, 'uploads');
    },
    filename: (_, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });

app.use(express.json());
app.use(cors());
connectDB();

app.use('/uploads', express.static('uploads'));
// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

app.post('/auth/register', handleValidationErrors, registerValidation, UserController.register);
app.post('/auth/login', handleValidationErrors, loginValidation, UserController.login);
app.get('/auth/me', checkAuth, UserController.getMe);


app.get('/posts', PostController.getAll);
app.get('/posts/:id', PostController.getOne);
app.post('/posts', postCreateValidation, PostController.create);
app.patch('/posts/:id', postCreateValidation, PostController.update);
app.delete('/posts/:id', PostController.remove)


app.use('/upload', checkAuth, upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`,
    });
});

app.listen(port, console.log(`Server running on port ${port}`));

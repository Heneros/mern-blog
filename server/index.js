
import cors from "cors";
import express from "express";
import * as dotenv from 'dotenv';
import { connectDB } from "./config/db.js";
import { postCreateValidation } from "./validation.js";
import { PostController } from './controllers/index.js';
dotenv.config()



const port = process.env.PORT || 5000;


const app = express();

app.use(express.json());
app.use(cors());
connectDB();

app.use(cors());
// app.get('/', (req, res) => {
//     res.send('Hello World');
// });


app.get('/posts', PostController.getAll);
app.get('/posts/:id', PostController.getOne);
app.post('/posts', postCreateValidation, PostController.create);
app.patch('/posts/:id', postCreateValidation, PostController.update);
app.delete('/posts/:id', PostController.remove )

app.listen(port, console.log(`Server running on port ${port}`));
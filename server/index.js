
// const { graphiql } = require("graphiql");
// const cors = require('cors');
// import('dotenv').config();

// const schema = require("./schema/schema");
import cors from "cors";
import express from "express";
import * as dotenv from 'dotenv';
import { connectDB } from "./config/db.js";
import { postCreateValidation } from "./validation.js";

// import * from './config/db';
dotenv.config()

// const connectDB = require("./config/db");
// import connectDB from "./config/db";

 
const port = process.env.PORT || 5000;
// const { graphqlHTTP } = require("express-graphql");
// const { postCreateValidation } = require("./validation");

const app = express();


connectDB();

app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World');
});
// app.use('/graphql', graphqlHTTP({
//     schema,
//     graphiql: true
// }))

app.post('/post', postCreateValidation,)


app.listen(port, console.log(`Server running on port ${port}`));
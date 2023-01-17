import mongoose from "mongoose";

// const mongoose = require('mongoose');


export const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongodb ${conn.connection.host}`);
}


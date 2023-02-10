import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import tourRouter from './routes/tours.js'

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// For Running Test API
app.get("/", (req, res) => {
    res.send("api is working");
})

// Data base Connection
mongoose.set("strictQuery", false)
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('MongoDB database Connected');
    } catch (err) {
        console.log('MongoDB database Connection Failed');
    }
}

// middleware 
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/tours", tourRouter);

app.listen(port, () => {
    connect();
    console.log(`The server has started on port: ${port}`)
});
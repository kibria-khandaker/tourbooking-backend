import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import tourRouter from './routes/tours.js';
import userRouter from './routes/users.js';
import authRouter from './routes/auth.js';

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
app.use("/auth", authRouter);
app.use("/tours", tourRouter);
app.use("/users", userRouter);

app.listen(port, () => {
    connect();
    console.log(`The server has started on port: ${port}`)
});



// https://www.youtube.com/watch?v=w_PxLGCBRuA&list=PLfhDYRr-FofmvuICA63cUD1vo7MuY-t3g&index=7

// 42 minit done

// npm run start-dev
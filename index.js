import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import tourRoute from './routes/tours.js';
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';
import reviewRoute from './routes/reviews.js';
import bookingRoute from './routes/bookings.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions={
    origin:true,
    credentials:true
}

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
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);

app.listen(port, () => {
    connect();
    console.log(`The server has started on port: ${port}`)
});



// https://www.youtube.com/watch?v=w_PxLGCBRuA&list=PLfhDYRr-FofmvuICA63cUD1vo7MuY-t3g&index=7

// 1.05.42 minit done

// npm run start-dev
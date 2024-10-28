import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import authRoute from './routes/auth.js';
import bookingRoute from './routes/bookings.js';
import reviewRoute from './routes/reviews.js';
import tourRoute from './routes/tours.js';
import userRoute from './routes/users.js';

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

// make a variable for api version 
const vrApi = "/api/v1";

// middleware 
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.use(`${vrApi}/auth`, authRoute);
app.use(`${vrApi}/tours`, tourRoute);
app.use(`${vrApi}/users`, userRoute);
app.use(`${vrApi}/review`, reviewRoute);
app.use(`${vrApi}/booking`, bookingRoute);

// app.use("/api/v1/auth", authRoute);
// app.use("/api/v1/tours", tourRoute);
// app.use("/api/v1/users", userRoute);
// app.use("/api/v1/review", reviewRoute);
// app.use("/api/v1/booking", bookingRoute);

app.listen(port, () => {
    connect();
    console.log(`The server has started on port: ${port}`)
});

// https://www.youtube.com/watch?v=w_PxLGCBRuA&list=PLfhDYRr-FofmvuICA63cUD1vo7MuY-t3g&index=7

// 1.05.42 minuit done

// npm run start-dev

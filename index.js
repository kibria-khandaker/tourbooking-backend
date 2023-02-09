import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// // For Test API
// app.get("/", (req, res) => {
//     res.send("api is working");
// })

// Data base Connection
const connect = async () => {
    try {

    } catch (err) {

    }
}



// middleware 
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.listen(port, () => {
    console.log(`The server has started on port: ${port}`)
});
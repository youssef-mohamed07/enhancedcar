import express from "express";
import { PORT, mongoDBCONNECTION } from "./config.js";
import mongoose from 'mongoose';
import user from './models/userModels.js';
import AuthRoutes from './routes/Auth.js';
import cookieParser from "cookie-parser";
import JsonWebTokenError  from "jsonwebtoken";
import cors from 'cors';


const app = express();

app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000"
    })
)


app.use(express.json());

app.use(cookieParser());

app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) =>{
    console.log(req)
    return res.status(200).send("working");
});

mongoose 
    .connect(mongoDBCONNECTION)
    .then(()=> {
        app.listen(PORT, () => {
            console.log(`app running on port: ${PORT}`);
        });
        console.log("connected to db");    
    })
    .catch(()=> {
        console.log(error);
    })

app.use(AuthRoutes);

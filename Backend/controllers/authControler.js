import User from "../models/userModels.js"
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../config.js";
import {hashPassword, comparePassword} from "../helpers/auth.js";

const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        
        if(!email | !password){
            return res.status(400).send("Provide all data please")
        }
        const user = await User.findOne({email});
        if(!user){
            return res.json({
                error: "User doesn't exist"
            })
        }
        const match = await comparePassword(password, user.password);
        if (match) {
            jwt.sign({ email: user.email, id: user._id, name: user.name }, JWT_SECRET, {}, (err, token) => {
                if (err) {
                    console.log(err); 
                    return res.status(500).send('JWT Signing Error');
                }
                res.cookie('token', token).json({
                    user: user,
                    message: 'logged in correctly'
                });
            });
        } else {
            return res.status(401).send('Incorrect Password');
        }

    } catch (error) {
        console.log(error);
        return res.status(500).send('Server error');
    }
}


const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).send('Please provide all data');
        }

        const exists = await User.findOne({ email });
        if (exists) {
            return res.status(400).send('Email already exists');
        }

        const hashedPassword = await hashPassword(password);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        return res.status(201).json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Server error');
    }
};

const getProfile = (req, res) => {
    const token = req.cookies.token; 
    if (token) {
        jwt.verify(token, JWT_SECRET, {}, (err, user) => {
            if (err) {
                return res.status(401).json({ message: 'Invalid or expired token' });
            }
            res.json(user);
        });
    }  
};

export { loginUser, registerUser, getProfile};

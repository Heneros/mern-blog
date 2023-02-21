import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';


import UserModel from "../models/User.js";


export const register = async (req, res) => {
    try {
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const doc = new UserModel({
            fullName: req.body.fullName,
            email: req.body.email,
            avatarUrl: req.body.avatarUrl,
            passwordHash: hash
        });
        const user = await doc.save();

        const token = jwt.sign(
            {
                _id: user._id
            },
            'keyunique',
            {
                expiresIn: '30d'
            },
        );
        ///Передать все данные из объекта user. в userData. За исключением passwordHash.
        const { passwordHash, ...userData } = user._doc;
        res.json({
            userData,
            token
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to register'
        });
    }
}


export const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({
                message: "User not found"
            });
        }
        const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to login'
        });
    }
}


export const getMe = async (req, res) => {
    try {
        const user = UserModel.findById(req.userId);
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

    } catch (err) {

    }
}
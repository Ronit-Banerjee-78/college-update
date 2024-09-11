import { hashPassword,comparePassword } from "./config.js";
import userModel from "./models/userModel.js";


export const registerController = async(req, res) => {
    try {
        const { name, email, phone,bio,college
         } = req.body
            //validation
        if (!name) {
            return res.send({ message: "NAme Required" })
        }
        if (!email) {
            return res.send({ message: "Email Required" })
        }
        if (!bio) {
            return res.send({ message: "Bio Required" })
        }
        if (!phone) {
            return res.send({ message: "Phn Required" })
        }
        if (!college) {
            return res.send({ message: "College Required" })
        }


        //check user
        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: 'Already Done Vaiiiii !!!',
            })
        }

        //register User
        const hashedPasword = await hashPassword(phone);
        //save
        const user = await new userModel({ name, email, phone, bio,college }).save();
        //token

        res.status(201).send({
            success: true,
            message: "Done Bhai!!!!",
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,

            },

        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message:error.message,
            error,
        })
    }
}
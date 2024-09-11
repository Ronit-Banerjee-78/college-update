import mongoose from "mongoose";
import bcrypt from "bcrypt";


const connectionn = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Server connected in ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}

export default connectionn


export const hashPassword = async(phone) => {
    try {
        const saltRounds = 10;
        const hashed = await bcrypt.hash(phone, saltRounds);
        return hashed;
    } catch (error) {
        console.log(error);
    }
}

export const comparePassword = async(phone, hashPassword) => {
    return bcrypt.compare(phone, hashPassword)
}
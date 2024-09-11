import express from "express";
import dotenv from "dotenv"
import morgan from "morgan";
import cors from "cors"
import connectionn from "./config.js";
import { registerController } from "./fromController.js";
import fromRouter from "./router/fromRouter.js"
const port = process.env.PORT || 8170;
const app = express();



dotenv.config();

//database connection
connectionn();

//middlewares
app.use(cors())
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api",fromRouter)
// app.use("/api/v1/auth", authRoutes)
// app.use("/api/v1/booking", bookingRoutes)
// // app.use("/api/v1/product", productRoutes)

//apis
app.get("/", (req, res) => {
    res.send("hello");
})

app.listen((port), () => {
    console.log(`server running in ${port}`);
});
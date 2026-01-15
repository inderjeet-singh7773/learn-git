import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config(); 

import connectDB from "./config/db.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(cors());       
app.use(express.json()); 

connectDB(); 

app.use("/api/users", userRoutes); 

export default app;

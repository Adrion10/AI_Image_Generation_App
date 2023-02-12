import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudianry } from "cloudinary";
import Post from "../mongoDB/models/post.js";

dotenv.config();
const router = express.Router();

export default router;

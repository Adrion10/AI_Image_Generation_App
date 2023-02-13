import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import Post from "../mongoDB/models/post.js";

dotenv.config();
const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// GET ALL POSTS
router.route("/").get(async (req, res) => {});
//Cretae a Post
router.route("/").post(async (req, res) => {
  const { name, prompt, photo } = req.body;
  const photoUrl = await cloudinary.uploader.uploadr(photo);
  const newPost = await Post.create({
    name,
    prompt,
    photo: photoUrl.url,
  });
  res.status(201).json({ success: true, data: newPost });
});

export default router;

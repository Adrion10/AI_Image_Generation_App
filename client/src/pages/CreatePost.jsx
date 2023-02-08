import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { preview } from "../assets";
import { getRandomPromt } from "..utils";
import { FormField, Loader } from "componenets";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  return <h1>create post</h1>;
};

export default CreatePost;

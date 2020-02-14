const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");
const PostControler = require("./controllers/PostController");
const LikeControler = require("./controllers/LikeContoller");

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get("/posts", PostControler.index);
routes.post("/posts", upload.single("image"), PostControler.store);

routes.post("/posts/:id/like", LikeControler.store);
module.exports = routes;

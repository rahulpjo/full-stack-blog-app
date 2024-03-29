import { Router } from "express";
import * as controllers from "../controllers/posts.js";

const router = Router();

router.get("/posts", controllers.getPosts);
router.get("/posts/:id", controllers.getSinglePost);
router.post("/posts", controllers.createPost);
router.put("/posts/:id", controllers.updatePost);
router.delete("/posts/:id", controllers.deletePost);

export default router;

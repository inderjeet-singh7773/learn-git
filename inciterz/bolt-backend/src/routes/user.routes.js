import express from "express";
import { addUser, listUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", addUser);
router.get("/", listUsers);

export default router;

import express from "express";
import {
    getUser,
    getUserFriends,
    addRemovefriend,
} from "../controllers/users.js";
import { verifyToken } from "jsonwebtoken";

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getUser );
router.get("/:idfriends". verifyToken, getUserFriends);

/* UPDATE */
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
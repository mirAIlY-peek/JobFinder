import express from "express";
import rateLimiter from "express-rate-limit";
const router = express.Router();
// import multer from 'multer';
// const upload = multer({ dest: 'uploads/' });

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: "Too many requests from this IP, please try again after 15 minutes",
});

import { register, login, updateUser } from "../controllers/authController.js";
import authenticateUser from "../middleware/auth.js";

router.route("/register").post(apiLimiter, register);
router.route("/login").post(apiLimiter, login);
router.route("/updateUser").patch(apiLimiter, authenticateUser, updateUser);
// router.route('/updateUser').patch(apiLimiter, authenticateUser, upload.single('resume'), updateUser);


export default router;

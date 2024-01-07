import Express from "express";
const router = Express.Router();
import validateToken from "../../MiddleWare/Auth/ValidateToken.js";
import AuthController from "../../Controller/Auth/AuthController.js";
import validateScehma from "../../MiddleWare/Schema/ValidateSchema.js";
import AuthYup from "../../Utils/Validation/AuthYup.js";

router.post("/register", validateScehma(AuthYup.registerSchema) ,AuthController.signUp)
router.get("/verifyEmail/:token",AuthController.verifyEmail)
router.post("/login",validateScehma(AuthYup.loginSchema),AuthController.signIn)

export default router
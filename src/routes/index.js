import express  from "express";
import { registerController, loginController, createuserController } from "../controllers";


const router = express.Router();

router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.post('/createuser', createuserController.createuser)


export default router;
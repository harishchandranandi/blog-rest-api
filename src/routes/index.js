import express  from "express";
import { registerController, loginController, userController, blogController, createuserController,  } from "../controllers";
import auth from "../middlewares/auth";


const router = express.Router();

router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.get('/userme', auth, userController.userme); 
router.post('/createuser', createuserController.createuser);


//blog section
router.post('/blog', blogController.store)


export default router;
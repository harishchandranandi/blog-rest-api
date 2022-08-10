import Joi from "joi"; 
import { User } from '../../data/models';
import bcrypt from 'bcrypt';
import  JwtService  from "../../services/JwtService";
import CustomErrorHandler from '../../services/CustomErrorHandler';


const registerController = {
    async register (req, res, next){
        const registerSchema = Joi.object ({
            name: Joi.string().min(3).max(25).required(),
            email: Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        });

        const {error} = registerSchema.validate(req.body);

        if (error) {
           return next(error);
        }

        // check if user is in the database alredy

        try {
            const exist = await User.exists({ email: req.body.email });
            if (exist) {
                return next(CustomErrorHandler.alreadyExist('This Email already taken.'));
            }
        }catch(err) {
            return next(err);
        }

        const {email, password} = req.body;
        const HashedPassword = await bcrypt.hash(password, 10);

        
        const user = new User({
            email: email,
            password: HashedPassword,
        });

        let access_token;

        try {
            const result = await user.save();
            console.log(result);

            // Token
            access_token = JwtService.sign({
                _id: result._id, role: result.role});
        }catch (err){
            return next(err);
        }
    
        res.json({ access_token: access_token });
    }
}

export default registerController;
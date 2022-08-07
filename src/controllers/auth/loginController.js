import Joi from "joi";

const loginController = {
    async login (req, res, next){
        const loginSchema = Joi.object ({
            email: Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        });
        console.log(req.body);
        const {error} = loginSchema.validate(req.body);

        if (error) {
           return next(error);
        }

        

        res.json({ msg: 'Hello, Thanks Connect With me'});
    }
}

export default loginController;
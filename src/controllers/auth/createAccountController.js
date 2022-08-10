import Joi from "joi";

const createuserController = {
    async createuser(req, res, next) {
        const createuserSchema = Joi.object({
            name: Joi.string().min(3).max(30).required(),
            phone: Joi.number().min(10).max(10).required(),
        });

    }

};

export default createuserController;
import { User } from "../../data/models";
import CustomErrorHandler from "../../services/CustomErrorHandler";

const userController = {
    async userme(req, res, next){
        try {  
            const user = await User.findOne({_id: req.user._id});
            if(!user){

                return next(CustomErrorHandler.notFound());

            }
            res.json(user);
  
        } catch (err) {
          return next(err); 
        }
    }

};


export default userController;
import CustomErrorHandler from "../services/CustomErrorHandler";
import JwtService from "../services/JwtService";

const auth = async (req, res, next) => {
    let authHeader = req.headers.authorization;
    console.log(authHeader);

    if(!authHeader){
        return next(CustomErrorHandler.unAuthorized());
    }

    try {
        const { _id, role } = await JwtService.verfiy(authHeader);
        const user = {
            _id,
            role
        }
        req.user = user;
        next();

    } catch (err) {
        return next(CustomErrorHandler.unAuthorized());
    }
}

export default auth;
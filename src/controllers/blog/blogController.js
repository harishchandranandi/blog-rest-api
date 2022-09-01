import { Createblog } from '../../data/models';
import multer from 'multer';
import path from 'path';
import CustomErrorHandler from '../../services/CustomErrorHandler';
import Joi from 'joi';
import { fs } from 'fs';

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'src/uploads/'),
  // filename: (req, file, cb) => {
  //     const uniqueName = `${Date.now()}-${Math.round(
  //         Math.random() * 1e9
  //     )}${path.extname(file.originalname)}`;
  //     3746674586-836534453.png
  //     cb(null, uniqueName);
  // },
});

const handleMultipartData = multer({
  storage,
  limits: { fileSize: 1000000 * 5 },
}).single('image');


const blogController = {
  async store ( req, res, next) {
    //multipart form data

    handleMultipartData (req, res, async (err) => {
      if(err){
        return next(CustomErrorHandler.serverError(err.message));
      }
      const filePath = req.file.path;

      const blogSchema = Joi.object({
        titli: Joi.string().required(),
        description: Joi.string().required(),
        categories : Joi.string().required(),
        tag : Joi.string().required(),
      });

      const { error } =blogSchema.validate(req.body);
      if (error) {
        fs.unlink(`${appRoot}/${filePath}`, (err) => {
          return next(CustomErrorHandler.serverError(err.message));
        });
        return next(error);
      } 
 
      const { titli, description, categories, tag } = req.body;
      let document;
      try {
        document = await blog.create({
          titli,
          description,
          categories,
          tags,
          image: filePath
        });


        
      } catch (err) {
        return next(err);
      }

      res.status(201).json(document);

    });

   } 
};

export default blogController;

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const createblogSchema = new Schema({
    titli: { type: String, require: true },
    description: {type: String, require: true},
    image: {  type: String, require: true },
    categories: { type: String, require: true }   
}, {timestamps: true}); 

export default mongoose.model('CreateBlog', createblogSchema, 'createblog')
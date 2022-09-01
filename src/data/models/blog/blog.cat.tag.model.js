import mongoose from "mongoose";

const Schema = mongoose.Schema;

const tagSchema = new Schema({
    categories: {
        Tag: { type: String, require: true }
    }
    
})

export default mongoose.model('Tagblog', tagSchema, 'tagblog')
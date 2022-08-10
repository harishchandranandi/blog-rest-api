import mongoose from "mongoose";

const Schema = mongoose.Schema;

const createuserSchema = new Schema({
    name: { type: String, require: true },
    phone: {type: Number, require: true}
})

export default mongoose.model('Createuser', createuserSchema, 'createuser')
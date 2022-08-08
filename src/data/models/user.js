import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, require: true, unique: true},
    password : { type: String, require: true},
    role: { type: String, default: 'customer' },

}, { timestamps: true });


export default mongoose.model('User', userSchema, 'users')
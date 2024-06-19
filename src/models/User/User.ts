import mongoose from 'mongoose';



const Schema = new mongoose.Schema(
    {
        
        name: { type: String, required: true, unique:true },
        password:{type:String, required: true},
    },
    {
        versionKey: false,
    }
);

const User = mongoose.model('users', Schema);

export default User;

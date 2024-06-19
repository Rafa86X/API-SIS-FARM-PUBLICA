import mongoose from 'mongoose';



const Schema = new mongoose.Schema(
    {
        active_chikens:{type: String, required: true},
        active_roosters:{type: String, required: true},
    },
    {
        versionKey: false,
    }
);

const Chickens = mongoose.model('chickens', Schema);

export default Chickens;

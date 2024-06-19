import mongoose from 'mongoose';



const Schema = new mongoose.Schema(
    {
        animal_id:{type: String},
        pharmacoType:{type: String},
        name: {type: String},
        qtd:{type: String},
        reason:{type: String},
        date:{type:String}

    },
    {
        versionKey: false,
    }
);

const Pharmaco = mongoose.model('pharmaco', Schema);

export default Pharmaco;
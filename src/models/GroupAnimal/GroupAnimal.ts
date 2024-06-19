import mongoose from 'mongoose';



const Schema = new mongoose.Schema(
    {
        species:{type: String, required: true},
        active:{type: Boolean, required: true},
        name: { type: String, required: true, unique:true },
        gender:{type:String, required: true},
        date_birth: { type: String, required: true },
        date_start:{ type: String, required: true},
        
        date_and: { type: String, required: true},
        reason:{ref:{type:String}, desc:{type:String}},
        
        puppies: {type:String},

        breed: {type:String},
        ancestry: {type:String},
    },
    {
        versionKey: false,
    }
);

const GroupAnimal = mongoose.model('groupanimal', Schema);

export default GroupAnimal;

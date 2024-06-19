import mongoose from 'mongoose';


const db = () => mongoose.connect(process.env.DATABASE_URL2)
    .then(() => console.log('conectou'));



export default db;
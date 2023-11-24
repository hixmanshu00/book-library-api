import mongoose from "mongoose";

export const connectToDb = () => {
    mongoose.connect(process.env.MONGO_URI,{
        dbName:'book-library'
    }).then(()=>{
        console.log('database connected')
    })
}
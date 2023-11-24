import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default:Date.now()
    }

})

export default mongoose.model('Book',bookSchema)
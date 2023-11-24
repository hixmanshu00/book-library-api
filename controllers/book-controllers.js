import Book from '../models/book-model.js'

export const getAllBooks = async (req, res) => {
    try {
        const data = await Book.find({})
        return res.status(200).json({message:"ok", data})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Something went wrong"})
    }
    
}

export const addBook = async (req,res) => {
    try {
        const {title, author} = req.body;
        const book = {title,author};
        await Book.create(book)
        res.status(201).json({message:'Book Created Successfully.'})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Something went wrong'})
    }
}

export const findBook = async (req,res) => {
    try {
        const {id} = req.params;
        const data = await Book.findById(id)
        if(data===null){
            return res.status(404).json({message:'Book not found'})
        }
        res.status(200).json({message:'ok', data})
    } catch (error) {
        res.status(500).json({message:'Something went wrong'})
    }
}

export const updateBook = async(req,res) => {
    try {
        const {id} = req.params;
        const book = req.body
        await Book.updateOne({_id:id},{$set:book})
        res.status(200).json({message: 'Book Updated'})
    } catch (error) {
        res.status(500).json({message:'Could not update the book'})
    } 
}

export const deleteBook = async(req,res) => {
    try {
        const {id} = req.params;
        await Book.deleteOne({_id: id})
        res.status(202).json({message:'Book Deleted Successfully'})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Something went wrong'})
    }
}
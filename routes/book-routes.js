import express from 'express'
import { addBook, getAllBooks, updateBook, deleteBook, findBook } from '../controllers/book-controllers.js';

const router = express.Router();

router.get('/', getAllBooks)
router.post('/addBook',addBook)
router.route('/:id').get(findBook).patch(updateBook).delete(deleteBook)

export default router
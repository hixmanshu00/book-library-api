import express from 'express'
import { connectToDb } from './db/connect.js'
import {config} from 'dotenv'
import booksRouter from './routes/book-routes.js'

const app = express()

config()

app.use(express.json())
app.use('/api/v1/books', booksRouter)
app.get('/', (req,res) => {
    res.send('Book Library API')
})

connectToDb()

app.listen(5000, ()=> {
    console.log('Server running on port 5000')
})
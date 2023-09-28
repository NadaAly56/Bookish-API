import express from 'express'
import { dbConnection } from './database/dbConnection.js'
import { bookModel } from './database/models/book.js'

const app = express()

dbConnection()
// app.use('/books')
app.use(express.json())
app.get('/', async(req, res)=>{
    const books = await bookModel.find()
    res.json({msg:'success', books: books})
})

app.delete('/', async(req, res)=>{

    const books = await bookModel.deleteMany({id: {
        $gte: 501,
        $lte: 10000,
      },})
    res.json({msg:'success', books})
})

app.listen(3200, ()=>{
    console.log("Server Connected on localhost 3200");
})
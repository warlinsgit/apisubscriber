require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {userNewUrlParser: true })

const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to Database') )
// app.get('/', (res, req) => {
//   res.send('hello');
// })

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')

app.use('/subscribers', subscribersRouter)

app.listen(5000, () => console.log('Server Started'))



Fully functional REST API with Node.js server and Express, connect that server to MongoDB through Mongoose, and setup a REST API with MongoDB and Node.js.

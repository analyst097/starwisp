const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
// console.log(uri);

mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then((res) => console.log("Successfully connected to MongoDB"))
  .catch((e) => console.log("Something bad happened", e));



const userRouter = require('./routes/users');
const expensesRouter = require('./routes/expenses');

app.use('/user', userRouter);
app.use('/expenses', expensesRouter);

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})

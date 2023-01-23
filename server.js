const express = require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


const dotenv = require("dotenv")
dotenv.config();

const connectDb = require("./server/config/mongoose.config")
connectDb();

const cors = require('cors');
app.use(cors());

const productRouter = require('./server/routes/products.route')
app.use('/api/products', productRouter);

const PORT = process.env.PORT;
app.listen(PORT, () =>
    console.log(`Listening on port : ${PORT}`));
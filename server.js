import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import authRoutes from './routes/authRoutes.js'
import {connectDb} from "./config/configDb.js";
import cors from 'cors';
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js"
dotenv.config();

const app=express()

connectDb();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(cors(
    { origin: ["https://proj-ecomm.vercel.app"],
     methods: ["POST", "GET"],
     credentials: true
    }
    ));
mongoose.connect('mongodb+srv://admin:admin@cluster0.mcu7pne.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0');
app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }));
app.get('/',(req, res)=>{
    res.send("<h1>Welcome! Happy shopping!</h1>")
})
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/product',productRoutes);

const port=8080;

app.listen(port, ()=>{
    console.log(`Server is connected to http://localhost:${port}`);
})

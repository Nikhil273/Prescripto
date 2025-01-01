import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/admin.routes.js';



//app config
const app = express();
const port = process.env.PORT || 5000;
connectDB();
connectCloudinary();


//middlewares
app.use(express.json());
app.use(cors());

//api end points
app.use('/api/admin', adminRouter); // http://localhost:5000/api/admin/


app.get('/', (req, res) => res.status(200).send('API Working!'));



app.listen(port, () => console.log(`Listening on localhost:${port}`));
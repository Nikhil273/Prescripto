import express from 'express';
import cors from 'cors';
import 'dotenv/config';

//app config
const app = express();
const port = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use(cors());

//api end points
app.get('/', (req, res) => res.status(200).send('API Working!'));

app.listen(port, () => console.log(`Listening on localhost:${port}`));
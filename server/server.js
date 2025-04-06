import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'

const PORT = process.env.PORT || 4000
const app = express();



app.use(express.json()) // This middleware tells Express to parse incoming JSON data in the request body.
app.use(cors())         // This enables CORS for all routes in your application.
await connectDB();


app.use('/api/user',userRouter);
app.get('/', (req, res) => res.send("server is working."));

app.listen(PORT, ()=>{console.log("Server is running on port " + PORT)});
import express, { json } from 'express'
import 'dotenv/config'
import connectDB from './config/db.mjs'
import userRouter from './routes/userRoutes.mjs'
import cookieParser from 'cookie-parser'
import middlewareRouter from './routes/middlewareRoute.mjs'
import { authMiddleware } from './controller/authMiddleware.mjs'
import cors from 'cors'


const app = express()

const port = 3000

app.use(express.json())
app.use(cookieParser())

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))

connectDB()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/v1',userRouter)
app.use('/api/v1',middlewareRouter)



app.get('/api/v1/profile',authMiddleware, (req,res)=>{

  

  res.send({
    email: req.user.email,
    name: req.user.name
  })
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

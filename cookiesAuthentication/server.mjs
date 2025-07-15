import express, { json } from 'express'
import 'dotenv/config'
import connectDB from './config/db.mjs'
import userRouter from './routes/userRoutes.mjs'
import cookieParser from 'cookie-parser'
import middlewareRouter from './routes/middlewareRoute.mjs'
import { authMiddleware } from './controller/authMiddleware.mjs'


const app = express()

const port = 3000

app.use(express.json())
app.use(cookieParser())

connectDB()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/v1',userRouter)
app.use('/api/v1',middlewareRouter)



app.get('/api/v1/profile',authMiddleware, (req,res)=>{
  res.send("Profile route")
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

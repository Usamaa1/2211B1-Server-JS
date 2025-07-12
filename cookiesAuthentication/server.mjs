import express from 'express'
import 'dotenv/config'
import connectDB from './config/db.mjs'
import userRouter from './routes/userRoutes.mjs'

const app = express()
const port = 3000

connectDB()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/v1',userRouter)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

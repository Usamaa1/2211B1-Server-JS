import express from 'express'
// import {client} from './connection/connection.mjs'
import postRoutes from './routes/postRoute.mjs'
import imageRoutes from './routes/imageRoute.mjs'
import mailRoutes from './routes/mailRoutes.mjs'

const app = express()
const port = 3000
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/v1',postRoutes);
app.use('/api/v1',imageRoutes)
app.use('/api/v1',mailRoutes);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

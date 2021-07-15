import express from 'express'
import logger from 'morgan'
import cors from 'cors'
import db from './db/connection.js'

import postRoutes from './routes/posts.js'

//initializing express
const app = express();

//initializing cors, logger, express.json
app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use('/api', postRoutes);

//defining local and production ports
const PORT=process.env.PORT || 3000;

//connecting to MongoDB to listen to the express server
//successful connection will log these consoles
db.on('connected', () => {
  console.log('Connected to MongoDB')
  app.listen(PORT, () => {
    console.log(`Express server application is running on port ${PORT}`)
  })
})
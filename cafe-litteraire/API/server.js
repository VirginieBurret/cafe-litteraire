const express = require('express')
const app = express()
app.use(express.json());
const port = 5000

require('./config/DB');


const usersRoutes = require("./Routes/Users/index");
//cors pour exploiter notre api en front
const cors = require('cors')

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type', 'Authorization'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }

app.use(cors(corsOptions));


// ROUTES

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/users', usersRoutes) // base de mon url pour les user

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const mongoose = require('mongoose');
const DB = "mongodb+srv://virginieburret:Musiquemaestro1@cluster0.rtdrw.mongodb.net/cercle-litteraire?retryWrites=true&w=majority";

mongoose.connect(DB, { useNewUrlParser: true,  useUnifiedTopology: true, useCreateIndex: true  })
.then(() => console.log('successfully connected to DB'))
.catch((err) => console.log('Failed to connect !', err));
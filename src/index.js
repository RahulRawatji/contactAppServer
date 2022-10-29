require('dotenv').config();
require('./db/mongooes');

const express = require('express');

const messageRouter = require('./routes/message');
const contactRotuer = require('./routes/contact');
const port = process.env.PORT || 3000

const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(messageRouter);
app.use(contactRotuer);

app.get('/', (req, res) => {
  res.send('APP is running')
});

app.listen(port, () => console.log('Server is running'));
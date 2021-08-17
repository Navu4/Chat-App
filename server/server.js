// importing
const express = require('express');
const mongoose = require('mongoose');
const Message = require('./dbMessages.js');

// app config
const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());

// DB config
const connection_url =
  'mongodb+srv://admin:EINMasskPrNffkyZ@cluster0.sjwpi.mongodb.net/chatappdb?retryWrites=true&w=majority';

mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ????

// app routes
app.get('/', (req, res) => {
  res.status(200).send('Navjot');
});

app.post('/messages/new', (req, res) => {
  const dbMessage = req.body;

  Message.useCreateIndex(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));

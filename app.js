const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/index.js');

const app = express();
const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  req.user = {
    _id: '5faef1f4dbf3d437887a173b',
  };

  next();
});
app.use('/', routes);
app.use('/', (req, res, err) => {
  if (err.name === 'Not Found') return res.status(404).send({ message: 'Переданы некорректные данные' });
  if (err.name === 'Bad Request') return res.status(400).send({ message: 'Запрашиваемый ресурс не найден' });
  return res.status(500).send({ message: 'Произошла ошибка' });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

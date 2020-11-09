const express = require('express');
const app = express();
const path = require('path');
const { PORT = 3000 } = process.env;
const userRoutes = require('./routes/users.js')
const cardRoutes = require('./routes/cards.js')



app.use(express.static(path.join(__dirname, 'public')));

app.use('/', userRoutes)
app.use('/', cardRoutes)
app.use('/', (req, res) => {
  res.status(404).send({ message: "Запрашиваемый ресурс не найден" });
});



app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})

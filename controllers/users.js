const User = require('../models/user');

module.exports.findUser = (req, res) => {
  User.find({})
    .then((user) => {
      if (!user) return res.status(404).send({ message: 'Переданы некорректные данные' });
      return res.send({ data: user });
    })
    .catch((err) => {
      console.error('err = ', err);
      if (err.name === 'CastError') return res.status(400).send({ message: 'Запрашиваемый ресурс не найден' });
      return res.status(500).send({ message: 'Произошла ошибка' });
    });
};
module.exports.findUserById = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) return res.status(404).send({ message: 'Переданы некорректные данные' });

      return res.send({ data: user });
    })
    .catch((err) => {
      console.error('err = ', err);
      if (err.name === 'CastError') return res.status(400).send({ message: 'Запрашиваемый ресурс не найден' });
      return res.status(500).send({ message: 'Произошла ошибка' });
    });
};
module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => {
      if (!user) return res.status(404).send({ message: 'Переданы некорректные данные' });
      return res.send({ data: user });
    })
    .catch((err) => {
      console.error('err = ', err);
      if (err.name === 'ValidationError') return res.status(400).send({ message: 'Запрашиваемый ресурс не найден' });
      return res.status(500).send({ message: 'Произошла ошибка' });
    });
};
module.exports.updateUser = (req, res) => {
  const me = req.user._id;
  const { name, about } = req.body;
  User.findByIdAndUpdate(me, { name, about }, {
    new: true,
    runValidators: true,
    upsert: false,
  })
    .then((user) => {
      if (!user) return res.status(404).send({ message: 'Переданы некорректные данные' });
      return res.send({ data: user });
    })
    .catch((err) => {
      console.error('err = ', err);
      if (err.name === 'ValidationError') return res.status(400).send({ message: 'Запрашиваемый ресурс не найден' });
      return res.status(500).send({ message: 'Произошла ошибка' });
    });
};
module.exports.updateUserAvatar = (req, res) => {
  const me = req.user._id;
  const { avatar } = req.body;
  User.findByIdAndUpdate(me, { avatar }, {
    new: true,
    runValidators: true,
    upsert: false,
  })
    .then((user) => {
      if (!user) return res.status(404).send({ message: 'Переданы некорректные данные' });
      return res.send({ data: user });
    })
    .catch((err) => {
      console.error('err = ', err);
      if (err.name === 'ValidationError') return res.status(400).send({ message: 'Запрашиваемый ресурс не найден' });
      return res.status(500).send({ message: 'Произошла ошибка' });
    });
};

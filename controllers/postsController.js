const connection = require('../data/db')

const index = (req, res) => {
  res.send('Lista dei post')
}

const show = (req, res) => {
  res.send('Mostro un post')
}

const store = (req, res) => {
  res.send('Aggiungo un post')
}

const update = (req, res) => {
  res.send('Modifico un post')
}

const modify = (req, res) => {
  res.send('Modifico un post')
}

const destroy = (req, res) => {
  res.send('Rimuovo un post')
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}
const connection = require('../data/db')

const index = (req, res) => {

  const sql = 'SELECT * FROM posts'

  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'Richiesta al database fallita' })
    res.json(results)
  })
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
  const id = req.params.id
  const sql = 'DELETE FROM posts WHERE posts.id = ?'

  connection.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ error: 'Non è stato possibile eliminare il post' })
    res.sendStatus(204)
  })
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}
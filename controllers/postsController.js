const connection = require('../data/db')

const index = (req, res) => {

  const sql = 'SELECT * FROM posts'

  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'Richiesta al database fallita' })
    res.json(results)
  })
}

const show = (req, res) => {
  const id = req.params.id
  const sql = 'SELECT * FROM posts WHERE id = ?'

  const sqlTags = `
  SELECT * 
  FROM tags
  JOIN post_tag ON tags.id = post_tag.tag_id 
  WHERE post_tag.post_id = ?
  `

  connection.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: 'Richiesta al database fallita' })

    if (results.length === 0) return res.status(404).json({ error: 'Post non trovato' })

    let post = results[0]

    connection.query(sqlTags, [id], (err, tagsResults) => {
      if (err) return res.status(500).json({ error: 'Richiesta al database fallita' })
      post.tags = tagsResults
      res.json(post)

    })
  })
}

const store = (req, res) => {
  res.send('Aggiungo un post')
}

const update = (req, res) => {
  const id = req.params.id
  res.send(`Modifico il post con id ${id}`)
}

const modify = (req, res) => {
  const id = req.params.id
  res.send(`Modifico il post con id ${id}`)
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
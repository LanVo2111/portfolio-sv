'use strict'
const db = require('../db')

module.exports = {
  get: (req, res) => {
      let sql = 'SELECT * FROM resume_work'
      db.query(sql, (err, response) => {
          if (err) throw err
          res.json(response)
      })
  },
}
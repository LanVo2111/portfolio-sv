'use strict'

// const util = require('util')
// const mysql = require('mysql')
const db = require('../db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM infor_user'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    update: (req, res) => {
        let data = req.body;
        let id = req.params.id;
        let sql = 'UPDATE infor_user SET ? WHERE id = ?'
        db.query(sql, [data, id], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
}

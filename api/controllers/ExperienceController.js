'use strict'

// const util = require('util')
// const mysql = require('mysql')
const db = require('../db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM resume_experience'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    update: (req, res) => {
        let data = req.body;
        let id = req.params.id;
        let sql = 'UPDATE resume_experience SET ? WHERE id = ?'
        db.query(sql, [data, id], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM resume_experience WHERE id = ?'
        db.query(sql, [req.params.id], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}

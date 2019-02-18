var con = require('../db');
var jwt = require('jsonwebtoken');
var controller = {

  addTask: function (req, res) {
    jwt.verify(req.token, 'mindnote', (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        let sql = `INSERT INTO task (user_id,name, color) VALUES (${authData.user.user_id},'${req.body.name}','${req.body.color}')`;
        con.query(sql, function (err, result) {
          if (err) {
            return res.send(err);
          } else {
            let task = {
              task_id: result.insertId,
              ...req.body
            }
            return res.send(task);
          }
        });
      }
    })

  },
  removeTask: function (req, res) {
    jwt.verify(req.token, 'mindnote', (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        let sql = `DELETE FROM task WHERE task_id=${req.body.id};`;
        con.query(sql, function (err, result) {
          if (err) {
            return res.send(err);
          } else {
            return res.send(result);
          }
        });
      }
    })

  },
  getTasks: function (req, res) {
    jwt.verify(req.token, 'mindnote', (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        let sql = `select * from task where user_id = ${authData.user.user_id};`;
        con.query(sql, function (err, result) {
          if (err) {
            return res.send(err);
          } else {
            return res.send(result);
          }
        });
      }
    })

  },

  updateTask: function (req, res) {
    jwt.verify(req.token, 'mindnote', (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        let sql = `UPDATE task SET state = '${req.body.state}' WHERE task_id = ${req.body.id};`;
        con.query(sql, function (err, result) {
          if (err) {
            return res.send(err);
          } else {
            return res.send(result);
          }
        });
      }
    })
  }

};

module.exports = controller;

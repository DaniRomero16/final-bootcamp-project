var con = require('../db');
var jwt = require('jsonwebtoken')

var controller = {

  addGoal: function (req, res) {
    console.log(req.body);
    // if (req.files.foto) {
    //   let oldPath = req.files.foto.path;
    //   let newPath = './public/img/' + req.files.foto.originalFilename;
    //   var todb = `'../img/${req.files.foto.originalFilename}'`;
    //   fs.rename(oldPath, newPath, function (err) {});
    // } else {
    //   var todb = null;
    // }
    jwt.verify(req.token, 'mindnote', (err, authData) => {
      if (err) {

        res.sendStatus(403);
      } else {

        let sql = `INSERT INTO goal (user_id, name, content, deadline, progress) 
        VALUES (${authData.user.user_id},'${req.body.name}',
        '${req.body.content}','${req.body.deadline}',${req.body.progress})`;
        con.query(sql, function (err, result) {
          if (err) {
            return res.send(err);
          } else {
            let goal = {
              goal_id: result.insertId,
              ...req.body
            }
            return res.send(goal);
          }
        });
      }
    })

  },
  removeGoal: function (req, res) {
    jwt.verify(req.token, 'mindnote', (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        let sql = `DELETE FROM goal WHERE goal_id=${req.body.id};`;
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
  updateGoal: function (req, res) {
    jwt.verify(req.token, 'mindnote', (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        let sql = `UPDATE goal SET progress = ${req.body.progress} WHERE goal_id=${req.body.goal_id}`;
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
  getGoals: function (req, res) {
    jwt.verify(req.token, 'mindnote', (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        console.log(authData);
        let sql = `select * from goal where user_id = ${authData.user.user_id};`;
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

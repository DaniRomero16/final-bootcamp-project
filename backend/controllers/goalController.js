var con = require('../db');

var controller = {

  addGoal: function (req, res) {
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
        var todb = null;
        let sql = `INSERT INTO goal (user_id, name, content, deadline, progress, image) 
        VALUES (${authData.user.id},'${req.body.name}',
        '${req.body.content}','${req.body.deadline}',${req.body.progress},${todb})`;
        con.query(sql, function (err, result) {
          if (err) {
            return res.send(err);
          } else {
            let goal = {
              id: result.insertId,
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
  getGoals: function (req, res) {
    jwt.verify(req.token, 'mindnote', (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        let sql = `select * from goal where user_id = ${authData.user.id};`;
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

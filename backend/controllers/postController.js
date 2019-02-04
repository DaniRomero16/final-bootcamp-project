var con = require('../db');

var controller = {

  addPost: function (req, res) {
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
        let sql = `INSERT INTO post (user_id, content, name, date, image) 
        VALUES (${authData.user.id},'${req.body.content}',
        '${req.body.name}','${req.body.date}',${todb})`;
        con.query(sql, function (err, result) {
          if (err) {
            return res.send(err);
          } else {
            let post = {
              id: result.insertId,
              ...req.body
            }
            return res.send(post);
          }
        });
      }
    })

  },
  removePost: function (req, res) {
    jwt.verify(req.token, 'mindnote', (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        let sql = `DELETE FROM post WHERE post_id=${req.body.id};`;
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
  getPosts: function (req, res) {
    jwt.verify(req.token, 'mindnote', (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        let sql = `select * from post where user_id = ${authData.user.id};`;
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

var con = require('../db');
var bcrypt = require('bcrypt-nodejs');
var fs = require('fs');
var jwt = require('jsonwebtoken');

// Subir imagenes
// let oldPath = req.files.foto.path;
// let newPath = './public/img/' + req.files.foto.originalFilename;
// let todb = '../img/' + req.files.foto.originalFilename;
// fs.rename(oldPath, newPath, function (err) { 

// });

var controller = {
  registerUser: function (req, res) {
    let password = req.body.password;
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, null, function (err, hash) {
        password = hash;
        if (!req.body.surname2) {
          req.body.surname2 = null
        } else {
          req.body.surname2 = `'${req.body.surname2}'`
        }
        let sql = `INSERT INTO user (username,email,name,password,surname1,genre,surname2) 
        VALUES ('${req.body.username}','${req.body.email}',
        '${req.body.name}','${password}',
        '${req.body.surname1}','${req.body.genre}',${req.body.surname2})`;
        con.query(sql, function (err, result) {
          if (err) {
            return res.send(err);
          } else {
            const user = {
              id: result.insertId,
              ...req.body
            };
            const {
              password,
              ...userOk
            } = user;
            jwt.sign({
              user
            }, 'mindnote', {
              expiresIn: '2h'
            }, (err, token) => {
              return res.json({
                token,
                ...userOk
              })
            })
          }
        });
      });
    })
  },
  loginUser: function (req, res) {
    let sql = `SELECT * from user where username ='${req.body.username}'`;

    con.query(sql, function (err, result) {
      if (err) {
        return res.send(err);
      } else {
        if (result == "") {
          return res.send('Usuario introducido no válido');
        } else {
          console.log(req.body);
          bcrypt.compare(req.body.password, result[0].password, function (err, iguales) {
            if (err) {
              return res.send(err)
            } else {
              if (iguales) {
                const {
                  password,
                  ...user
                } = result[0];
                jwt.sign({
                  user
                }, 'mindnote', {
                  expiresIn: '2h'
                }, (err, token) => {
                  return res.json({
                    token,
                    ...user
                  })
                })
              } else {
                return res.send('La contraseña no es correcta')
              };
            };
          });
        };
      };
    });
  },
  logoutUser: function (req, res) {

  }
};

module.exports = controller;

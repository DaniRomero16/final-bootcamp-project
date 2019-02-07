var con = require('../db');
var bcrypt = require('bcrypt-nodejs');
var fs = require('fs');
var jwt = require('jsonwebtoken');


var controller = {
  registerUser: function (req, res) {
    let password = req.body.password;
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, null, function (err, hash) {
        password = hash;
        let sql = `INSERT INTO user (username,email,name,password,surname) 
        VALUES ('${req.body.username}','${req.body.email}',
        '${req.body.name}','${password}',
        '${req.body.surname}')`;
        con.query(sql, function (err, result) {
          if (err) {
            return res.send(err);
          } else {
            const userBad = {
              id: result.insertId,
              ...req.body
            };
            const {
              password,
              ...user
            } = userBad;
            jwt.sign({
              user
            }, 'mindnote', {
              expiresIn: '2h'
            }, (err, token) => {
              return res.json({
                token,
              })
            })
          }
        });
      });
    })
  },
  loginUser: function (req, res) {
    let sql = `SELECT * from user where email ='${req.body.email}'`;

    con.query(sql, function (err, result) {
      if (err) {
        return res.send(err);
      } else {
        if (result == "") {
          return res.send('Usuario introducido no válido');
        } else {
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
                    token
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

var con = require('../db');
var jwt = require('jsonwebtoken');
var controller = {

  addComparison: function (req, res) {
    jwt.verify(req.token, 'mindnote', (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        console.log(authData);
        let sql = `INSERT INTO comparison (user_id,name, leftC, rightC) VALUES (${authData.user.user_id},'${req.body.name}','${req.body.leftC}','${req.body.rightC}')`;
        con.query(sql, function (err, result) {
          if (err) {
            return res.send(err);
          } else {
            let comparison = {
              comparison_id: result.insertId,
              ...req.body,
              left: [],
              right: [],
            }
            return res.send(comparison);
          }
        });
      }
    })

  },
  removeComparison: function (req, res) {
    jwt.verify(req.token, 'mindnote', (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        let sql = `DELETE FROM comparison WHERE comparison_id=${req.body.id};`;
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
  getComparisons: function (req, res) {
    jwt.verify(req.token, 'mindnote', (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        let sql = `select * from comparison where user_id = ${authData.user.user_id};`;
        let toSend = [];
        con.query(sql, function (err, comparisons) {
          if (err) {
            return res.send(err);
          } else {
            comparisons.forEach((comp, index) => {
              let sql2 = `select * from compare_item where comparison_id = ${comp.comparison_id};`;
              con.query(sql2, (err, items) => {
                if (err) {
                  return res.send(err);
                } else {
                  let left = [];
                  let right = [];
                  items.forEach(item => {
                    if (item.side == 'left') {
                      left.push({
                        ...item
                      });
                    } else {
                      right.push({
                        ...item
                      });
                    }
                  });
                  toSend.push({
                    ...comp,
                    left,
                    right
                  });
                };
                if (index == comparisons.length - 1) {
                  return res.send(toSend);
                }
              });
            });
          }
        });
      }
    })

  },
  addCompareItem: function (req, res) {

    jwt.verify(req.token, 'mindnote', (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        let sql = `INSERT INTO compare_item (comparison_id,name,side) 
        VALUES (${req.body.comparison_id},'${req.body.name}','${req.body.side}')`;
        con.query(sql, function (err, result) {
          if (err) {
            return res.send(err);
          } else {
            let item = {
              item_id: result.insertId,
              ...req.body
            }
            return res.send(item);
          }
        });
      }
    })

  },
  removeCompareItem: function (req, res) {

    jwt.verify(req.token, 'mindnote', (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        let sql = `DELETE FROM compare_item WHERE item_id=${req.body.id};`;
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
};

module.exports = controller;

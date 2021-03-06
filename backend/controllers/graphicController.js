var con = require('../db');
var jwt = require('jsonwebtoken');
var controller = {

  addGraphic: function (req, res) {
    jwt.verify(req.token, 'mindnote', (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        let sql = `INSERT INTO graphic (user_id,name) VALUES (${authData.user.user_id},'${req.body.name}')`;
        con.query(sql, function (err, result) {
          if (err) {
            return res.send(err);
          } else {
            let graphic = {
              graphic_id: result.insertId,
              ...req.body,
              items: [],
            }
            return res.send(graphic);
          }
        });
      }
    })

  },
  removeGraphic: function (req, res) {
    jwt.verify(req.token, 'mindnote', (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        let sql = `DELETE FROM graphic WHERE graphic_id=${req.body.id};`;
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
  getGraphics: function (req, res) {
    jwt.verify(req.token, 'mindnote', (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        let sql = `select * from graphic where user_id = ${authData.user.user_id};`;
        let toSend = [];
        con.query(sql, function (err, graphics) {
          if (err) {
            return res.send(err);
          } else {
            graphics.forEach((graph, index) => {
              let sql2 = `select * from graphic_item where graphic_id = ${graph.graphic_id} order by date asc`;
              con.query(sql2, (err, items) => {
                if (err) {
                  return res.send(err);
                } else {
                  toSend.push({
                    ...graph,
                    items
                  });
                };
                if (index == graphics.length - 1) {
                  return res.send(toSend);
                }
              });
            });
          }
        });
      }
    })
  },
  addGraphicItem: function (req, res) {
    jwt.verify(req.token, 'mindnote', (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        let sql = `INSERT INTO graphic_item (graphic_id,value) 
        VALUES (${req.body.graphic_id},${req.body.value})`;
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
  removeGraphicItem: function (req, res) {
    jwt.verify(req.token, 'mindnote', (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        let sql = `DELETE FROM graphic_item WHERE item_id=${req.body.id};`;
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

var con = require('../db');

var controller = {

  addList: function (req, res) {
    jwt.verify(req.token, 'mindnote', (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        let sql = `INSERT INTO todolist (user_id,name,description) VALUES (${authData.user.id},'${req.body.name}','${req.body.description}')`;
        con.query(sql, function (err, result) {
          if (err) {
            return res.send(err);
          } else {
            let todolist = {
              id: result.insertId,
              ...req.body
            }
            return res.send(todolist);
          }
        });
      }
    })

  },
  removeList: function (req, res) {
    jwt.verify(req.token, 'mindnote', (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        let sql = `DELETE FROM todolist WHERE list_id=${req.body.id};`;
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
  getLists: function (req, res) {
    jwt.verify(req.token, 'mindnote', (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        let sql = `select * from todolist where user_id = ${authData.user.id};`;
        let toSend = [];
        con.query(sql, function (err, todolists) {
          if (err) {
            return res.send(err);
          } else {
            todolists.forEach((list, index) => {
              let sql2 = `select * from list_item where list_id = ${list.list_id};`;
              con.query(sql2, (err, items) => {
                if (err) {
                  return res.send(err);
                } else {
                  toSend.push({
                    ...list,
                    items
                  });
                };
                if (index == todolists.length - 1) {
                  return res.send(toSend);
                }
              });
            });
          }
        });
      }
    })

  },
  addListItem: function (req, res) {
    jwt.verify(req.token, 'mindnote', (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        let sql = `INSERT INTO list_item (list_id,name,state,description) 
            VALUES (${req.body.list},'${req.body.name}','${req.body.state}','${req.body.description}')`;
        con.query(sql, function (err, result) {
          if (err) {
            return res.send(err);
          } else {
            let item = {
              id: result.insertId,
              ...req.body
            }
            return res.send(item);
          }
        });
      }
    })

  },
  removeListItem: function (req, res) {
    jwt.verify(req.token, 'mindnote', (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        let sql = `DELETE FROM list_item WHERE item_id=${req.body.id};`;
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

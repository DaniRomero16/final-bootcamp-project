var app = require("./app");
var userController = require("./controllers/userController");
var comparisonController = require("./controllers/comparisonController");
var goalController = require("./controllers/goalController");
var graphicController = require("./controllers/graphicController");
var listController = require("./controllers/listController");
var postController = require("./controllers/postController");

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({
  uploadDir: './public/img'
})

app.post("/users/register", userController.registerUser);
app.post("/users/login", userController.loginUser);

app.post("/post/new", verifyToken, postController.addPost);
app.post("/post/remove", verifyToken, postController.removePost);
app.get("/post/get", verifyToken, postController.getPosts);

app.post("/goal/new", verifyToken, goalController.addGoal);
app.post("/goal/remove", verifyToken, goalController.removeGoal);
app.get("/goal/get", verifyToken, goalController.getGoals);
app.post("/goal/update", verifyToken, goalController.updateGoal);

app.post("/comparison/new", verifyToken, comparisonController.addComparison);
app.post("/comparison/remove", verifyToken, comparisonController.removeComparison);
app.get("/comparison/get", verifyToken, comparisonController.getComparisons);
app.post("/compare_item/new", verifyToken, comparisonController.addCompareItem);
app.post("/compare_item/remove", verifyToken, comparisonController.removeCompareItem);

app.post("/graphic/new", verifyToken, graphicController.addGraphic);
app.post("/graphic/remove", verifyToken, graphicController.removeGraphic);
app.get("/graphic/get", verifyToken, graphicController.getGraphics);
app.post("/graphic_item/new", verifyToken, graphicController.addGraphicItem);
app.post("/graphic_item/remove", verifyToken, graphicController.removeGraphicItem);

app.post("/list/new", verifyToken, listController.addList);
app.post("/list/remove", verifyToken, listController.removeList);
app.get("/list/get", verifyToken, listController.getLists);
app.post("/list_item/new", verifyToken, listController.addListItem);
app.post("/list_item/remove", verifyToken, listController.removeListItem);
//token format
//authorization: bearer <access_token>

// verify token

function verifyToken(req, res, next) {
  //get auth header value
  const bearerHeader = req.headers["authorization"];
  //check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    //split at the space
    const bearer = bearerHeader.split(' ');
    // get token from array
    const bearerToken = bearer[1];
    //set the token
    req.token = bearerToken;
    //next
    next();
  } else {
    //forbidden
    res.sendStatus(403);
  }
}

module.exports = app;

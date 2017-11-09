/**
 * Created by a.srivastava on 12/16/16.
 */
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
var shareRouter = express.Router();
var db = [];
shareRouter.route('/')
    .get(function(req, res) {
        res.status(200).json(db);
    })
    .post(function(req,res){
        db.push(req.body);
        res.status(200).json(db);
    });
app.use('/api/share', shareRouter);
app.listen(8080, function(){
    console.log('Application started.');
})
module.exports = app;
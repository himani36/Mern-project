const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());

const connectionString = "mongodb+srv://Himani:himani@cluster0.a8nilmi.mongodb.net/?retryWrites=true&w=majority";


var Users;
MongoClient.connect(connectionString, function(err, succ) {
    if(err) throw err;
    console.log('Db Connected');
    var db = succ.db('Project');
    Users = db.collection('Users');
})


app.post('/AddUser', (req,res) => {
    // console.log(req.body);
    Users.insertOne(req.body).then((succ) => {
        res.send("ok");
    }
    )
})

app.get('/getUsers', (req,res) => {
    Users.find().toArray().then((succ) => {
        res.send(succ);
    })
})

app.post('/getoneUsers', (req,res) => {
    Users.findOne(req.body).then((succ) => {
        //console.log(succ);
        res.send(succ);
    })
})

app.post('/deleteonedata', (req,res) => {
    console.log(req.body.id);
    var idd = new mongodb.ObjectId(req.body.id);
    Users.deleteOne({
        _id: idd
    }).then((succ) => {
        res.send('Deleted');
    })
})

app.listen(1200, (req,res) => {
    console.log('Server Started');
})
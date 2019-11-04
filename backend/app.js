//import package
const express = require('express')
const bodyParser = require('body-parser')
const Residence = require('./models/residence');
const User = require('./models/user');
const mongoose = require("mongoose");
// use express and save as app constant
const app = express()

mongoose.connect("mongodb+srv://max:9ws5TbyoNgAyqYXA@cluster0-4wb1f.mongodb.net/PaP?retryWrites=true&w=majority")
.then(() => {
  console.log('Connected with Database');
})
.catch(() => {
  console.log('Connection failed');
});

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS, PUT");
  next();
});

//all the request targeting localhost/residences will come to this route
app.post("/api/residences", (req, res, next) => {
  const residence = new Residence({
    residenceName: req.body.residenceName,
    address: req.body.address,
    numUnits: req.body.numUnits,
    monthlyRental: req.body.monthlyRental,
    sizePerUnit: req.body.sizePerUnit,
    facilities: req.body.facilities,
    applications: req.body.applications
  });
  residence.save();
  console.log(residence);
  res.status(201).json({
    message: 'Residence added successfully'
  });
});

app.get('/api/residences', (req, res, next)=>{
  Residence.find().then(documents => {
    res.status(200).json({
      message: 'Residence fetched successfully',
      residences: documents
    });
  })
});

//all the request targeting localhost/users will come to this route
app.post("/api/users", (req, res, next) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });
  user.save();
  console.log(user);
  res.status(201).json({
    message: 'User added successfully'
  });
});

app.get('/api/users', (req, res, next)=>{
  User.find().then(documents => {
    res.status(200).json({
      message: 'Users fetched successfully',
      users: documents
    });
  })
});
// export the module so server can use it
module.exports = app;

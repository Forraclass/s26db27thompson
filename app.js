var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);
var Fruit = require("./models/fruit");

// We can seed the collection if needed on server start
async function recreateDB(){
// Delete everything
  await Fruit.deleteMany();

  let instance1 = new
  Fruit({
    name:"Ghost Chile", 
    color:'burnished honey',
    marketPrice:15.40
  });
  let instance2 = new 
  Fruit({
    name: "Roczgut",
    color: "eminent slime",
    marketPrice: 100.02
  })
  let instance3 = new 
  Fruit({
    name: "Shadvex",
    color: "midnight blue",
    marketPrice: 100000.99
  })

  instance1.save().then(doc=>{
  console.log("First object saved")}
  ).catch(err=>{
  console.error(err)
  });
  instance2.save().then(doc=>{
  console.log("Second object saved")}
  ).catch(err=>{
  console.error(err)
  });
  instance3.save().then(doc=>{
  console.log("Third object saved")}
  ).catch(err=>{
  console.error(err)
  });
}

  let reseed = true;
  if (reseed) {recreateDB();}


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var quixoticFruitsRouter = require('./routes/quixoticFruit');
var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick');
var fruitRouter = require('./routes/resource')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/quixotic', quixoticFruitsRouter);
app.use('/grid', gridRouter);
app.use('/pick', pickRouter);
app.use('/resource', fruitRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

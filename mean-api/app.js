var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors')

var book = require('./routes/book');
var app = express();
app.use(cors())

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://uju1tkogrr00ejqnfubj:0Nom3LLSdKvRgT1SpaXm@btjdwq6zxhlzg0j-mongodb.services.clever-cloud.com:27017/btjdwq6zxhlzg0j', { useUnifiedTopology: true, useNewUrlParser: true, promiseLibrary: require('bluebird') })
  .then(() =>  console.log('... connected to MongoDb on Port 27017'))
  .catch((err) => console.error(err));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/books', express.static(path.join(__dirname, 'dist')));
app.use('/book', book);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //res.json({ error: err })​;
});

module.exports = app;
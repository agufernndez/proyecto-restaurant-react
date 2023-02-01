var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
var session = require('express-session')
var fileupload = require('express-fileupload');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/admin/login');
var adminRouter = require('./routes/admin/menuSemanal');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ACTIVAR CUANDO SOLUCIONE LO DE LA BASE DE DATOS. AHORA LO DESACTIVE PORQUE SINO NO PUEDO ENTRAR A /ADMIN/NOVEDADES
app.use(session({
  secret: 'PW2023awqyeudj',
  cookie: {maxAge: null},
  resave: false,
  saveUninitialized: true
}))

secured = async (req, res, next) => {
  try {
    console.log(req.session.id_usuario);
    if (req.session.id_usuario) {
      next();
    } else {
      res.redirect('/admin/login');
    }
    } catch (error) {
    console.log(error);
      } 
}

app.use(fileupload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/menuSemanal', secured, adminRouter);// poner 'secured' en esta linea es para que solo puedan acceder a la seccion de menuSemanal los usuarios que ingresaron sesion. si no ingresaron sesion y ponen /menuSemanal, los redirecciona automaticamente a /admin/login


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

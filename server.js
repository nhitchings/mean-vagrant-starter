var express = require('express'),
  mongoose = require('mongoose'),
  passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;

var env = process.env.NODE_ENV || 'development';

var app = express();

var config = require('./server/config/config') [env];

require('./server/config/express')(app, config);

require('./server/config/mongoose')(config);

var User = mongoose.model('User');
passport.use(new LocalStrategy(
  function(username, password, done) {

    var query =  User.findOne({username: username});

    // Use native promises
    mongoose.Promise = global.Promise;
      assert.equal(query.exec(function(err, user) {
        if(user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      }).constructor, global.Promise);
  }
));

passport.serializeUser(function(user, done) {
  if(user) {
    done(null, user._id);
  }
});

passport.deserializeUser(function(user, done) {
  User.findOne({_id:id}).exec(function(err, user) {
    if(user) {
      return done(null, user);
    } else {
      return done(null, 'test ' + user);
    }
  })
});

require('./server/config/routes')(app);

app.listen(config.port);
console.log('Listening on port ' + config.port + '...');

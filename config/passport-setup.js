var passport = require('passport');
var googlekey = require('./keys');

var GoogleStrategy = require('passport-google-oauth20');

passport.use(
    new GoogleStrategy({
        //options for google start
        clientID: googlekey.google.clientID,
        clientSecret: googlekey.google.clientSecret,
        callbackURL: '/auth/google/redirect'
        
    }, function(token, tokenSecret, profile, done) {
            // User.findOrCreate({ googleId: profile.id }, function (err, user) {
            //     return done(err, user);
            // });
            console.log(profile);
    })
)
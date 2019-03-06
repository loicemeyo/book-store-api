const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const { secretKey } = require('./config');
const db = require('../database/models');
const EncryptData = require('../lib/helpers/Encrypt');

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, async (email, password, done) => {
  try {
    const user = await db.User.findOne({ where: { email } });
    if (!user) return done('user does not exist')
    const passwordMatch = await EncryptData.comparePassword(password, user.password);
    if (passwordMatch) return done(null, user)
    return done('incorrect email or password');
  } catch (error) {
    done(error);
  }
}));

passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secretKey,
},
(jwtPayload, done) => {
  if (Date.now() > jwtPayload.expiresIn) {
    return done('jwt expired');
  }
  return done(null, jwtPayload);
}));

const localAuthentication = passport.authenticate('local', {
  session: false,
})

const jwtAuthentication = passport.authenticate('jwt', { session: false })

module.exports = {
  localAuthentication,
  jwtAuthentication,
}

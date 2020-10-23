import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { secret } from './jwtConfig';
import userRepository from '../db/repositories/userRepository';

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret
};

passport.use(new JwtStrategy(options, async ({ id }, done) => {
  try {
    const user = await userRepository.getById(id);
    return user ? done(null, user) : done({ status: 401, message: 'Token is invalid.' }, null);
  } catch (err) {
    return done(err);
  }
}));

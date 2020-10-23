import jwt from 'jsonwebtoken';
import { secret, expiresIn } from '../config/jwtConfig';

export const createToken = async data => jwt.sign(data, secret, { expiresIn });

import { Router } from 'express';
import * as authController from '../controllers/authController';
import * as userController from '../controllers/userController';

import authenticationMiddleware from '../middlewares/authenticationMiddleware';
import registrationMiddleware from '../middlewares/registrationMiddleware';
import createUserValidationMiddleware from '../middlewares/createUserValidationMiddleware';

const router = Router();

// user added to the request (req.user) in a strategy, see passport config
router
  .post('/login', authenticationMiddleware, (req, res, next) => authController.login(req.user)
    .then(data => res.send(data))
    .catch(next))
  .post('/register',
    createUserValidationMiddleware,
    registrationMiddleware,
    (req, res, next) => authController.register(req.user)
      .then(data => res.send(data))
      .catch(next))
  .get('/user', (req, res, next) => userController.getUserById(req.user.id)
    .then(data => res.send(data))
    .catch(next));

export default router;

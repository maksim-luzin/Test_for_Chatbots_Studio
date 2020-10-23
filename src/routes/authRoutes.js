import { Router } from 'express';
import * as authController from '../controllers/authController';
import * as userController from '../controllers/userController';

const router = Router();

// user added to the request (req.user) in a strategy, see passport config
router
  .post('/login', (req, res, next) => authController.login(req.user)
    .then(data => res.send(data))
    .catch(next))
  .post('/register', (req, res, next) => authController.register(req.user)
    .then(data => res.send(data))
    .catch(next))
  .get('/user', (req, res, next) => userController.getUserById(req.user.id)
    .then(data => res.send(data))
    .catch(next));

export default router;

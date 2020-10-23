import { Router } from 'express';
import * as distributorController from '../controllers/distributorController';
import adminMiddleware from '../middlewares/adminMiddleware';

const router = Router();

router
  .get('/', (req, res, next) => distributorController.getAllDistributors()
    .then(distributors => res.send(distributors))
    .catch(next))
  .get('/:id', (req, res, next) => distributorController.getAllProductsByDistributorId(req.params.id)
    .then(products => res.send(products))
    .catch(next))
  .post('/', adminMiddleware, (req, res, next) => distributorController.addDistributor(req.body)
    .then(id => res.send(id))
    .catch(next))
  .put('/:id', adminMiddleware, (req, res, next) => distributorController.updateDistributorById(req.params.id, req.body)
    .then(() => res.send())
    .catch(next))
  .delete('/:id', adminMiddleware, (req, res, next) => distributorController.deleteDistributorById(req.params.id)
    .then(() => res.send())
    .catch(next));

export default router;

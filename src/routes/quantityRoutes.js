import { Router } from 'express';
import * as quantityController from '../controllers/quantityController';

const router = Router();

router
  .get('/:id', (req, res, next) => quantityController.getQuantityById(req.params.id)
    .then(quantity => res.send(quantity))
    .catch(next))
  .post('/', (req, res, next) => quantityController.addQuantityById(req.body)
    .then(id => res.send(id))
    .catch(next))
  .put('/:id', (req, res, next) => quantityController.updateQuantityById(req.params.id, req.body)
    .then(() => res.send())
    .catch(next))
  .delete('/:id', (req, res, next) => quantityController.deleteQuantityById(req.body)
    .then(() => res.send())
    .catch(next));

export default router;

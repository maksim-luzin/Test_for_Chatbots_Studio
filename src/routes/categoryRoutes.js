import { Router } from 'express';
import * as categoryController from '../controllers/categoryController';

const router = Router();

router
  .get('/', (req, res, next) => categoryController.getAllCategories()
    .then(categories => res.send(categories))
    .catch(next))
  .get('/:id', (req, res, next) => categoryController.getAllProductsByCategoryId(req.params.id)
    .then(products => res.send(products))
    .catch(next))
  .post('/', (req, res, next) => categoryController.addCategory(req.body)
    .then(id => res.send(id))
    .catch(next))
  .put('/:id', (req, res, next) => categoryController.updateCategoryById(req.params.id, req.body)
    .then(() => res.send())
    .catch(next))
  .delete('/:id', (req, res, next) => categoryController.deleteCategoryById(req.params.id)
    .then(() => res.send())
    .catch(next));

export default router;

import { Router } from 'express';
import * as productController from '../controllers/productController';
import adminMiddleware from '../middlewares/adminMiddleware';
import createProductValidationMiddleware from '../middlewares/createProductValidationMiddleware';
import updateProductValidationMiddleware from '../middlewares/updateProductValidationMiddleware';

const router = Router();

router
  .get('/', (req, res, next) => productController.getAllProducts()
    .then(products => res.send(products))
    .catch(next))
  .get('/:id', (req, res, next) => productController.getProductById(req.params.id)
    .then(product => res.send(product))
    .catch(next))
  .post('/',
    adminMiddleware,
    createProductValidationMiddleware,
    (req, res, next) => productController.addProduct(req.body)
      .then(id => res.send(id))
      .catch(next))
  .put('/:id',
    adminMiddleware,
    updateProductValidationMiddleware,
    (req, res, next) => productController.updateProductById(req.params.id, req.body)
      .then(product => res.send(product))
      .catch(next))
  .delete('/:id', adminMiddleware, (req, res, next) => productController.deleteProductById(req.params.id)
    .then(() => res.send())
    .catch(next));

export default router;

import toDate from 'validator/lib/toDate';
import isPriceValid from '../helpers/priceValidHelper';
import isQuantityValid from '../helpers/quantityValidHelper';

const updateProductValidationMiddleware = (req, res, next) => {
  const { body } = req;

  if (!isPriceValid(body.price)) {
    next({ status: 400, message: 'Bad price' }, null);
  }

  if (!!body.quantity.quantity && !isQuantityValid(body.quantity.quantity)) {
    next({ status: 400, message: 'Bad quantity' }, null);
  }

  if (!!body.quantity.expirationDate && !toDate(body.quantity.expirationDate)) {
    next({ status: 400, message: 'Bad expiration date' }, null);
  }
  next();
};

export default updateProductValidationMiddleware;

import toDate from 'validator/lib/toDate';
import isFieldEmpty from '../helpers/fieldEmptyValidation';
import isBadRequest from '../helpers/badRequestValidation';
import isPriceValid from '../helpers/priceValidHelper';
import isQuantityValid from '../helpers/quantityValidHelper';

const createProductValidationMiddleware = (req, res, next) => {
  const modelKeys = [
    'title',
    'price',
    'unit',
    'category',
    'name',
    'quantity',
    'expirationDate'
  ];

  const { body } = req;
  const bodyKeys = Object.keys(body);

  if (isBadRequest(modelKeys, bodyKeys)) next({ status: 400, message: 'Bad request' }, null);
  const fieldEmpty = isFieldEmpty(modelKeys, bodyKeys);
  if (fieldEmpty) next({ status: 400, message: fieldEmpty }, null);
  if (!isPriceValid(body.price)) next({ status: 400, message: 'Bad price' }, null);
  if (!isQuantityValid(body.quantity)) next({ status: 400, message: 'Bad quantity' }, null);
  if (!toDate(body.expirationDate)) next({ status: 400, message: 'Bad expiration date' }, null);
  next();
};

export default createProductValidationMiddleware;

import isEmail from 'validator/lib/isEmail';

import isFieldEmpty from '../helpers/fieldEmptyValidation';
import isBadRequest from '../helpers/badRequestValidation';

const createUserValidationMiddleware = (req, res, next) => {
  const modelKeys = [
    'isAdmin',
    'username',
    'email',
    'password'
  ];

  const { body } = req;
  const bodyKeys = Object.keys(body);

  if (isBadRequest(modelKeys, bodyKeys)) next({ status: 400, message: 'Bad request' }, null);
  const fieldEmpty = isFieldEmpty(modelKeys, bodyKeys);
  if (fieldEmpty) next({ status: 400, message: fieldEmpty }, null);
  if (!isEmail(body.email)) next({ status: 400, message: 'Bad email' }, null);
  next();
};

export default createUserValidationMiddleware;

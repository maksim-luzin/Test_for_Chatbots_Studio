import orm from '../db/connection';
import associate from '../db/associations';

const User = orm.import('./user');
const Product = orm.import('./product');
const Category = orm.import('./category');
const Quantity = orm.import('./quantity');
const Distributor = orm.import('./distributor');

associate({
  User,
  Product,
  Category,
  Quantity,
  Distributor
});

export {
  User as UserModel,
  Product as ProductModel,
  Category as CategoryModel,
  Quantity as QuantityModel,
  Distributor as DistributorModel
};

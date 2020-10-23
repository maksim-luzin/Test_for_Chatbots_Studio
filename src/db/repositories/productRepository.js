import {
  ProductModel,
  CategoryModel,
  DistributorModel,
  QuantityModel
} from '../../models';
import BaseRepository from './baseRepository';

class ProductRepository extends BaseRepository {
  getProductById(id) {
    return this.model.findOne({
      where: { id },
      attributes: ['id', 'title', 'price', 'unit'],
      include: [
        {
          model: CategoryModel,
          attributes: ['id', 'category']

        },
        {
          model: DistributorModel,
          attributes: ['id', 'name']

        },
        {
          model: QuantityModel,
          attributes: ['id', 'quantity', 'expirationDate']
        }
      ]
    });
  }

  getAllProducts() {
    return this.model.findAll({
      attributes: ['id', 'title', 'price', 'unit'],
      order: [['title', 'ASC']],
      include: [
        {
          model: CategoryModel,
          attributes: ['id', 'category']

        },
        {
          model: DistributorModel,
          attributes: ['id', 'name']

        },
        {
          model: QuantityModel,
          attributes: ['id', 'quantity', 'expirationDate']
        }
      ]
    });
  }
}

export default new ProductRepository(ProductModel);

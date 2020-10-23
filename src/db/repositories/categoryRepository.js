import { CategoryModel, ProductModel, QuantityModel } from '../../models';
import BaseRepository from './baseRepository';

class CategoryRepository extends BaseRepository {
  getAllProductsByCategoryId(id) {
    return this.model.findOne({
      where: { id },
      attributes: ['id', 'category'],
      order: [[ProductModel, 'title', 'ASC']],
      include: {
        model: ProductModel,
        attributes: ['id', 'title', 'price', 'unit'],
        include: {
          model: QuantityModel,
          attributes: ['id', 'quantity', 'expiration_date']
        }
      }
    });
  }

  getCategoryId(category) {
    return this.model.findOne({
      attributes: ['id'],
      where: { category }
    });
  }

  getAllCategories() {
    return this.model.findAll({
      attributes: ['id', 'category'],
      order: [['category', 'ASC']]
    });
  }
}

export default new CategoryRepository(CategoryModel);

import { DistributorModel, ProductModel, QuantityModel } from '../../models';
import BaseRepository from './baseRepository';

class DistributorRepository extends BaseRepository {
  getAllProductsByDistributorId(id) {
    return this.model.findOne({
      where: { id },
      attributes: ['id', 'name'],
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

  getDistributorId(distributor) {
    return this.model.findOne({
      attributes: ['id'],
      where: distributor
    });
  }

  getAllDistributors() {
    return this.model.findAll({
      attributes: ['id', 'name'],
      order: [['name', 'ASC']]
    });
  }
}

export default new DistributorRepository(DistributorModel);

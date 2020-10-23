import { QuantityModel } from '../../models';
import BaseRepository from './baseRepository';

class QuantityRepository extends BaseRepository { }

export default new QuantityRepository(QuantityModel);

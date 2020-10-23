import { UserModel } from '../../models';
import BaseRepository from './baseRepository';

class UserRepository extends BaseRepository {
  addUser(user) {
    return this.create(user);
  }

  getByEmail(email) {
    return this.model.findOne({ where: { email } });
  }

  getByUsername(username) {
    return this.model.findOne({ where: { username } });
  }

  getUserById(id) {
    return this.model.findOne({
      attributes: ['id', 'username', 'isAdmin'],
      where: { id }
    });
  }
}

export default new UserRepository(UserModel);

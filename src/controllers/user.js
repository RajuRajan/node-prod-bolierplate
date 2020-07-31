import models from '#db/models/index';

const UserModel = models.user;
class UserController {
  getUser = (where = {}) => UserModel.findOne({ where, raw: true });
}

export default new UserController();

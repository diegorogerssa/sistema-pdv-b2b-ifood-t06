const registerController = require('./user/registerController');
const listCategoryController = require('./category/listCategoryController');
const loginController = require('./user/loginController');
const updateUserController = require('./user/updateUserController');
const detailUserController = require('./user/detailUserController')

module.exports = {
  registerController,
  loginController,
  updateUserController,
  listCategoryController,
  detailUserController
};

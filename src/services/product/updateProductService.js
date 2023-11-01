const {
  updateProductModel,
  getProductByIDModel,
  getCategoryByIDModel
} = require('../../models');

const registerProductService = async (productData) => {
  const { categoria_id } = productData;
  const { id } = productData;

  const categoryExists = await getCategoryByIDModel(categoria_id);
  if (!categoryExists) {
    throw {
      statusCode: 404,
      message: 'Category not found',
    };
  }

  const productExists = await getProductByIDModel(id);
  if (!productExists) {
    throw {
      statusCode: 404,
      message: 'Product not found',
    };
  }

  await updateProductModel(productData);
};

module.exports = registerProductService;

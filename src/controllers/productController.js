import distributorRepository from '../db/repositories/distributorRepository';
import productRepository from '../db/repositories/productRepository';
import categoryRepository from '../db/repositories/categoryRepository';
import quantityRepository from '../db/repositories/quantityRepository';

export const getAllProducts = async () => {
  const allProducts = await productRepository.getAllProducts();

  if (!allProducts) throw Error('Get all products failed');
  return allProducts;
};

export const getProductById = async id => {
  const product = await productRepository.getProductById(id);

  if (!product) throw Error('Get all product failed');
  return product;
};

export const addProduct = async productAdd => {
  const {
    category,
    distributor,
    quantity,
    expirationDate,
    ...product
  } = productAdd;
  const categoryId = await categoryRepository.getCategoryId(category);
  const distributorId = await distributorRepository.getDistributorId(distributor);

  const productId = await productRepository.create({
    ...product,
    categoryId: categoryId.toJSON().id,
    distributorId: distributorId.toJSON().id
  });

  const quantityId = await quantityRepository.create({
    quantity,
    expirationDate,
    productId: productId.toJSON().id
  });

  if (!quantityId) throw Error('Product add failed');
  const newProduct = await getProductById(productId.toJSON().id);

  return newProduct;
};

export const updateProductById = async (productId, productUpdate) => {
  const {
    id,
    category,
    distributor,
    quantities,
    expirationDate,
    ...product
  } = productUpdate;

  const categoryId = await categoryRepository.getCategoryId(category.category);
  const distributorId = await distributorRepository.getDistributorId(distributor.distributor);

  const productForUpdated = {
    ...product,
    categoryId: categoryId.toJSON().id,
    distributorId: distributorId.toJSON().id
  };
  await productRepository.updateById(id, productForUpdated);

  let updatedQuantity = null;
  const udateQuantities = async quantity => {
    if (!quantities.id) {
      updatedQuantity = await quantityRepository.create({ ...quantity, productId });
    } else {
      updatedQuantity = await quantityRepository.updateById(quantity.id,
        {
          quantity: quantity.quantity,
          expirationDate: quantity.expirationDate
        });
    }
    // eslint-disable-next-line no-console
    console.log(updatedQuantity.toJSON());
    if (!updatedQuantity) throw Error('Quantity update failed');
  };

  for (let key = 0; key < quantities.key; key++) {
    udateQuantities(quantities[key]);
  }

  const updatedProduct = await getProductById(id);
  return updatedProduct;
};

export const deleteProductById = async productId => {
  const product = await getProductById(productId);
  const { quantities } = product;
  if (!quantities.lenght || quantities.every(quantity => quantity.quantity)) {
    throw Error('Product delete failed');
  }
  const success = await productRepository.deleteById(productId);
  if (!success) throw Error('Product delete failed');
};

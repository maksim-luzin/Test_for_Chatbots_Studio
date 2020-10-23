import categoryRepository from '../db/repositories/categoryRepository';

export const getAllCategories = async () => {
  const allCategories = await categoryRepository.getAllCategories();

  if (!allCategories) throw Error('Get all categories failed');
  return allCategories;
};

export const getAllProductsByCategoryId = async id => {
  const allProductsByCategoryId = await categoryRepository.getAllProductsByCategoryId(id);

  if (!allProductsByCategoryId) throw Error('Get all products by category id failed');
  return allProductsByCategoryId;
};

export const addCategory = async category => {
  const newCategory = await categoryRepository.create(category);
  if (!newCategory) throw Error('Category add failed');
  return { id: newCategory.toJSON().id };
};

export const updateCategoryById = async (id, category) => {
  const updatedСategory = await categoryRepository.updateById(id, category);
  if (!updatedСategory) throw Error('Category update failed');
};

export const deleteCategoryById = async id => {
  const success = await categoryRepository.deleteById(id);
  if (!success) throw Error('Category delete failed');
};

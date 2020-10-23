import quantityRepository from '../db/repositories/quantityRepository';

export const getQuantityById = async id => {
  const quantity = await quantityRepository.getById(id);

  if (!quantity) throw Error('Get quantity failed');
  return quantity;
};

export const addQuantity = async quantity => {
  const newQuantity = await quantityRepository.create({ quantity });
  if (!newQuantity) throw Error('Quantity add failed');
  return { id: newQuantity.toJSON().id };
};

export const updateQuantity = async (id, quantity) => {
  const updatedQuantity = await quantityRepository.updateById(id, quantity);
  if (!updatedQuantity) throw Error('Quantity update failed');
};

export const deleteQuantity = async id => {
  const success = await quantityRepository.deleteById(id);
  if (!success) throw Error('Quantity delete failed');
};

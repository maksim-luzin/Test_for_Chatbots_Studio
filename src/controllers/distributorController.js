import distributorRepository from '../db/repositories/distributorRepository';

export const getAllDistributors = async () => {
  const allDistributors = await distributorRepository.getAllDistributors();

  if (!allDistributors) throw Error('Get all distributors failed');
  return allDistributors;
};

export const getAllProductsByDistributorId = async id => {
  const allProducts = await distributorRepository.getAllProductsByDistributorId(id);

  if (!allProducts) throw Error('Get all products by distributor id failed');
  return allProducts;
};

export const addDistributor = async distributor => {
  const newDistributor = await distributorRepository.create(distributor);
  if (!newDistributor) throw Error('New distributor add failed');
  return { newDistributor };
};

export const updateDistributorById = async (id, projectName) => {
  const updatedDistributor = await distributorRepository.updateById(id, projectName);
  if (!updatedDistributor) throw Error('Distributor update failed');
};

export const deleteDistributorById = async id => {
  const success = await distributorRepository.deleteById(id);
  if (!success) throw Error('Distributor delete failed');
};

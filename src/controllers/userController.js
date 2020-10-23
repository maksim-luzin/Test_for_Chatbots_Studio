import userRepository from '../db/repositories/userRepository';

export const getUserById = async userId => {
  const { id, username, email, isAdmin } = await userRepository.getUserById(userId);
  return { id, username, email, isAdmin };
};

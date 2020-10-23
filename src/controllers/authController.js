import userRepository from '../db/repositories/userRepository';
import { createToken } from '../helpers/tokenHelper';
import { encrypt } from '../helpers/cryptoHelper';

export const login = async ({ id }) => ({
  token: await createToken({ id }),
  user: await userRepository.getUserById(id)
});

export const register = async ({ password, ...userData }) => {
  const newUser = await userRepository.addUser({
    ...userData,
    password: await encrypt(password)
  });
  return login(newUser);
};

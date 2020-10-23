const isBadRequest = (modelKeys, bodyKeys) => (
  !bodyKeys.every(bodyKey => bodyKey !== 'id' && modelKeys.includes(bodyKey))
);

export default isBadRequest;

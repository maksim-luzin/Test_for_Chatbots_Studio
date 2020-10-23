const isFieldEmpty = (modelKeys, bodyKeys) => {
  if (modelKeys.length !== bodyKeys.length) {
    const message = modelKeys.filter(key => (
      (key !== 'id') && !bodyKeys.includes(key)
    )).join(', ');
    return (`${message} field is empty`);
  }
  return false;
};

export default isFieldEmpty;

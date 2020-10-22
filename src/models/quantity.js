export default (orm, DataTypes) => {
  const Quantity = orm.define('quantity', {
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    expirationDate: {
      allowNull: false,
      type: DataTypes.DATEONLY
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});

  return Quantity;
};

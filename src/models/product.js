export default (orm, DataTypes) => {
  const Product = orm.define('product', {
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL(6, 2)
    },
    unit: {
      allowNull: false,
      type: DataTypes.STRING
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});

  return Product;
};

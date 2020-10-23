export default models => {
  const {
    Product,
    Category,
    Quantity,
    Distributor
  } = models;

  Category.hasMany(Product);
  Product.belongsTo(Category);

  Product.hasMany(Quantity);
  Quantity.belongsTo(Product);

  Distributor.hasMany(Product);
  Product.belongsTo(Distributor);
};

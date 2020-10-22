export default (orm, DataTypes) => {
  const Category = orm.define('category', {
    category: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});

  return Category;
};

export default (orm, DataTypes) => {
  const Distributor = orm.define('distributor', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});

  return Distributor;
};

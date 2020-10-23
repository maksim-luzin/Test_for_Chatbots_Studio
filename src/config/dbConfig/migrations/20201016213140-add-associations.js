export default {
  up: (queryInterface, Sequelize) => queryInterface.sequelize
    .transaction(transaction => Promise.all([
      queryInterface.addColumn('products', 'categoryId', {
        type: Sequelize.UUID,
        references: {
          model: 'categories',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }, { transaction }),
      queryInterface.addColumn('products', 'distributorId', {
        type: Sequelize.UUID,
        references: {
          model: 'distributors',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }, { transaction }),
      queryInterface.addColumn('quantities', 'productId', {
        type: Sequelize.UUID,
        references: {
          model: 'products',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }, { transaction })
    ])),

  down: queryInterface => queryInterface.sequelize
    .transaction(transaction => Promise.all([
      queryInterface.removeColumn('products', 'categoryId', { transaction }),
      queryInterface.removeColumn('products', 'distributorId', { transaction }),
      queryInterface.removeColumn('quantities', 'productId', { transaction })
    ]))
};

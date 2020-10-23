export default {
  up: async queryInterface => {
    // Categories
    const vegatablesId = [...await queryInterface.bulkInsert('categories', [{
      category: 'vegatables',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {
      returning: ['id']
    })][0].id;

    const fruitsId = [...await queryInterface.bulkInsert('categories', [{
      category: 'fruit',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {
      returning: ['id']
    })][0].id;

    // Distributors
    const villageId = [...await queryInterface.bulkInsert('distributors', [{
      name: 'Village',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {
      returning: ['id']
    })][0].id;
    const farmId = [...await queryInterface.bulkInsert('distributors', [{
      name: 'Farm',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {
      returning: ['id']
    })][0].id;

    // Products
    const potatoesId = [...await queryInterface.bulkInsert('products', [{
      title: 'potatoes',
      price: '8.95',
      unit: 'kg',
      categoryId: vegatablesId,
      distributorId: villageId,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {
      returning: ['id']
    })][0].id;

    const cabbageId = [...await queryInterface.bulkInsert('products', [{
      title: 'cabbage',
      price: '5.54',
      unit: 'kg',
      categoryId: vegatablesId,
      distributorId: villageId,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {
      returning: ['id']
    })][0].id;

    const cheryId = [...await queryInterface.bulkInsert('products', [{
      title: 'chery',
      price: '18.46',
      unit: 'kg',
      categoryId: fruitsId,
      distributorId: farmId,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {
      returning: ['id']
    })][0].id;

    const bananaId = [...await queryInterface.bulkInsert('products', [{
      title: 'banana',
      price: '22.58',
      unit: 'kg',
      categoryId: fruitsId,
      distributorId: farmId,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {
      returning: ['id']
    })][0].id;

    // Qantities
    await queryInterface.bulkInsert('quantities', [{
      quantity: '76',
      expirationDate: '2021.02.05',
      productId: potatoesId,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

    await queryInterface.bulkInsert('quantities', [{
      quantity: '45',
      expirationDate: '2021.01.10',
      productId: cabbageId,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

    await queryInterface.bulkInsert('quantities', [{
      quantity: '15',
      expirationDate: '2020.11.01',
      productId: cheryId,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

    await queryInterface.bulkInsert('quantities', [{
      quantity: '25',
      expirationDate: '2020.11.05',
      productId: bananaId,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete('Categories', null, {});
    await queryInterface.bulkDelete('Distributors', null, {});
    await queryInterface.bulkDelete('Products', null, {});
    await queryInterface.bulkDelete('Quantities', null, {});
  }
};

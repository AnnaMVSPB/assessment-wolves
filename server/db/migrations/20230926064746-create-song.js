/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Songs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      executorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Executors',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      hit: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      url: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Songs');
  },
};

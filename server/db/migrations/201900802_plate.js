const PlateNumbers = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('PlateNumbers', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    numberlist: {
      type: Sequelize.STRING,
      allowNull: false
    },
    skippednumber: {
      type: Sequelize.STRING,
      allowNull: false
    },
    userId: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId'
      }
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: queryInterface => queryInterface.dropTable('PlateNumbers')
};
export default PlateNumbers;

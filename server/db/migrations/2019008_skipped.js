const SkippedNumbers = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('SkippedNumbers', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    number: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
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
  down: queryInterface => queryInterface.dropTable('SkippedNumbers')
};
export default SkippedNumbers;

const skippednumber = (sequelize, DataTypes) => {
  const SkippedNumber = sequelize.define(
    'SkippedNumber',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        validate: {
          isUUID: 4
        }
      },
      number: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    },
    {}
  );
  return SkippedNumber;
};
export default skippednumber;

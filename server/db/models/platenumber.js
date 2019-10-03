const platenumber = (sequelize, DataTypes) => {
  const PlateNumber = sequelize.define(
    'PlateNumber',
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
      numberlist: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      skippednumber: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        validate: {
          isUUID: 4
        }
      },
    },
    {}
  );

  PlateNumber.associate = (models) => {
    PlateNumber.belongsTo(models.User, {
      foreignKey: 'userId',
      target: 'id',
      as: 'user',
      onDelete: 'CASCADE'
    });
  };
  return PlateNumber;
};
export default platenumber;

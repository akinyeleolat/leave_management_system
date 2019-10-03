import models from '<serverModels>';
import {
  displayError, handleResponse,
  handleSuccessResponse, toLowerCaseAndTrim,
} from '<helpers>/utils';
import generatePlateNumber from '<helpers>/generatePlateNumber';
import checkSkippedNumber from '<helpers>/checkSkippedNumber';


const { PlateNumber, User } = models;

export const getPlateNumber = async (req, res) => {
  let plateNumbers;
  try {
    plateNumbers = await PlateNumber.findAll({
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['firstName', 'lastName', 'email'],
        }
      ]
    });

    if (!plateNumbers.length) {
      handleResponse(null, 'No plate number added at the moment', res, 'failed', 404);
    } else {
      handleResponse(plateNumbers, 'plate numbers retrieved successfully', res, 'success', 200);
    }
  } catch (error) {
    displayError(error, res, 500);
  }
};

export const addPlateNumber = async (req, res) => {
  const formattedValues = toLowerCaseAndTrim(req.body);
  const {
    min, max, stateName, userId
  } = formattedValues;

  const plateNumber = generatePlateNumber(min, max, stateName);
  if (!plateNumber) {
    const err = new Error('invalid parameter supplied');
    return displayError(err, res, 400);
  }

  const checkSkippedNum = await checkSkippedNumber(plateNumber, res);
  try {
    if (!checkSkippedNum) {
      const [platenumber, created] = await PlateNumber.findOrCreate(
        { where: { number: plateNumber }, defaults: { userId } }
      );
      if (created) {
        return handleSuccessResponse(platenumber.dataValues, 'plate number added successfully', res, 201);
      }
      return handleSuccessResponse(platenumber.dataValues, 'plate number existed', res, 200);
    }
    return handleSuccessResponse(checkSkippedNum.dataValues, 'plate number should be skipped', res, 400);
  } catch (error) {
    const err = new Error('Server error');
    return displayError(err, res, 500);
  }
};

import models from '<serverModels>';
import {
  handleResponse,
} from '<helpers>/utils';


const { SkippedNumber } = models;
const checkSkippedNumber = async (plateNumber, res) => {
  const skippedNumber = await SkippedNumber.findOne({ where: { number: plateNumber } });
  if (skippedNumber) {
    handleResponse(plateNumber, 'plate numbers should be skipped', res, 'error', 403);
  }
  return false;
};

export default checkSkippedNumber;

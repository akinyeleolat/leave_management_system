import {
  validate,
  toLowerCaseAndTrim,
  uuidFormat
} from '<helpers>/utils';


/**
     * validate plate generation endpoint
     * @param {Object} req - request body
     * @param {Object} res - response body
     * @param {Object} next - call next function
     * @returns {Function} validate - call validate function
     */
const validatePlateDetails = (req, res, next) => {
  const formattedValues = toLowerCaseAndTrim(req.body);
  const {
    min, max, stateName, userId
  } = formattedValues;

  const data = {
    min,
    max,
    stateName,
    userId
  };

  const plateDetailsRules = {
    stateName: 'required|string|alpha|min:3',
    min: 'required|digits:3',
    max: 'required|digits:3',
    userId: ['required', uuidFormat],
  };
  validate(data, plateDetailsRules, res, next);
};

export default validatePlateDetails;

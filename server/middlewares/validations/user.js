import {
  validate,
  toLowerCaseAndTrim,
} from '<helpers>/utils';


/**
   * validate user sign up endpoint
   * @param {Object} req - request body
   * @param {Object} res - response body
   * @param {Object} next - call next function
   * @returns {Function} validate - call validate function
   */
const validateUser = (req, res, next) => {
  const formattedValues = toLowerCaseAndTrim(req.body);
  const {
    email, firstName, lastName
  } = formattedValues;

  const data = {
    firstName,
    lastName,
    email,
  };

  const addUserRules = {
    email: 'required|email',
    firstName: 'required|string|alpha|min:5',
    lastName: 'required|string|alpha|min:5',
  };
  validate(data, addUserRules, res, next);
};

export default validateUser;

import model from '../db/models';
import {
  displayError, handleSuccessResponse, toLowerCaseAndTrim
} from '<helpers>/utils';


const { User } = model;

const addUser = async (req, res) => {
  const formattedValues = toLowerCaseAndTrim(req.body);
  const {
    email, firstName, lastName
  } = formattedValues;


  try {
    const [user, created] = await User.findOrCreate(
      { where: { email }, defaults: { firstName, lastName } }
    );
    if (created) {
      return handleSuccessResponse(user.dataValues, 'User created successfully', res, 201);
    }
    return handleSuccessResponse(user.dataValues, 'User existed', res, 200);
  } catch (error) {
    const err = new Error('Server error');
    return displayError(err, res, 500);
  }
};

export default addUser;

const userRouter = require('express').Router();
const { validateUserData } = require('../middlewares/validation');

const {
  getCurrentUser,
  updateProfile,
} = require('../controllers/userControllers');

userRouter.get('/me', getCurrentUser);
userRouter.patch('/me', validateUserData, updateProfile);

module.exports = { userRouter };

const express = require ('express');
const { registerController, loginController, currentUserController } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

//routes
 //Register || Post
router.post('/register' ,registerController);

//Login || Post
router.post('/login', loginController);

//GET Current user || GET
router.get('/current-user',authMiddleware,currentUserController);

module.exports = router ;
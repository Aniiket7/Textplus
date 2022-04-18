const express = require('express');
const { protect } = require('../controllers/middlewares/authMIddleware');
const { signup, login, allUsers } = require('../controllers/userController');
const router = express.Router();

router.route("/").post(signup).get(allUsers);
router.post("/login", login)

module.exports = router;
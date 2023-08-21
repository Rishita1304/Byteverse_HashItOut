const { postPass, verifyPass, setPass, redirect } = require('../controllers/forgetPassword');

const router = require('express').Router();

router.post('/', postPass);
router.get("/:id", verifyPass);
router.post("/:id", setPass);

module.exports = router;
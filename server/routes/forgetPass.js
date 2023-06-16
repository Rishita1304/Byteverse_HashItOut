const { postPass, verifyPass, setPass } = require('../controllers/forgetPassword');

const router = require('express').Router();

router.post('/', postPass);
router.get("/:id/:token", verifyPass);
router.post("/:id/:token", setPass);

module.exports = router;
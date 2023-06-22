const { postPass, verifyPass, setPass, redirect } = require('../controllers/forgetPassword');

const router = require('express').Router();

router.post('/', postPass);
router.get("/:id/:token", verifyPass);
router.post("/:id/:token", setPass);
router.get("/redirect/:id/:token",redirect);

module.exports = router;
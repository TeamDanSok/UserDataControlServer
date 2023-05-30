var express = require("express");
var router = express.Router();
var userController = require("../controllers/user.crtl");
var dialogController = require("../controllers/dialog.crtl");
router.post("/user/register", userController.process.signUp);
router.get("/user/initNang/:userNo",dialogController.process.initNang);
router.post("/user/testIntense",dialogController.process.checkIntense);
router.get("/dialog/open/:userNo",dialogController.process.createOpeningDialog);
router.get("/dialog/isCreate/:userNo",dialogController.process.checkQeued);
module.exports = router;
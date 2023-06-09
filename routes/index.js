var express = require("express");
var router = express.Router();
var userController = require("../controllers/user.crtl");
var dialogController = require("../controllers/dialog.crtl");
router.post("/user/register", userController.process.signUp);
router.get("/user/initNang/:userNo",dialogController.processs.initNang);
router.post("/user/testIntense",dialogController.processs.checkIntense);
router.get("/dialog/open/:userNo",dialogController.processs.createOpeningDialog);
router.get("/dialog/isCreate/:userNo",dialogController.processs.checkQeued);
router.get("/dialog/popDialog/:userNo",dialogController.processs.popDialog);
router.get("/user/getEssential/:userNo",userController.data.getEssentialDatabyUserNo);
router.post("/user/ask",dialogController.processs.userAsk);
router.get("/user/flush/:userNo",dialogController.processs.flushCache);
module.exports = router;
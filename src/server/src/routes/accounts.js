const express = require("express");
const router = express.Router();

const SiteController = require("../app/controllers/SiteController");

//router.get('/', SiteController.home)

router.get("/", SiteController.getAll);
router.get("/:id", SiteController.getOne);
router.post("/changePassword", SiteController.changePost);
router.post("/updateInfo", SiteController.updateInfoGet);

router.post("/login", SiteController.loginPost);
router.post("/signup", SiteController.signupPost);

module.exports = router;

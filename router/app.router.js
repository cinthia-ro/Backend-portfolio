const controller = require("../controller/app.controller");
const router = require("express").Router();

router.get("/portfolio", controller.portfolioAppRouter);
router.get("/testimonial", controller.testimonialAppRouter);

module.exports = router
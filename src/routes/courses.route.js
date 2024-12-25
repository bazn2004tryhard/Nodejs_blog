const express = require("express");
const router = express.Router();

const coursesController = require("../app/conttrolers/CoursesController");

router.get("/create", coursesController.create);
router.post("/store", coursesController.store);
router.get("/:slug", coursesController.show);

module.exports = router;

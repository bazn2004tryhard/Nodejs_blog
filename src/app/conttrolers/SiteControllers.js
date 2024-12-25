const Course = require("../models/course");
const { multipleMongooseToObject } = require("../../util/mongoose");
class SiteController {
  //[GET] /homehome
  async index(req, res) {
    try {
      const courses = await Course.find({});
      console.log("Courses: ", courses); // Log để kiểm tra
      // Chuyển dữ liệu sang object
      res.render("home", { courses: multipleMongooseToObject(courses) }); // Truyền courses vào view
    } catch (err) {
      console.error("Error fetching courses: ", err); // Log lỗi nếu xảy ra
      res.status(400).json({ error: "Error" });
    }
  }

  // [GET] ./searchsearch
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();

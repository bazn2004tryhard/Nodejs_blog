const Course = require("../models/course");
const { mongooseToObject } = require("../../util/mongoose");
class CoursesController {
  // [GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  // [GET] /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  // [post] /courses/store
  //việc lưu dữ liệu sẽ dùng ở đâyđây
  store(req, res, next) {
    const formData = req.body;
    formData.slug = formData.name;
    formData.image =
      "https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAsKlcxOc9jIzsv5HuQIRjav2S_7A";
    // res.json(req.body);
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {
        console.log(error);
      });
  }
}
module.exports = new CoursesController();

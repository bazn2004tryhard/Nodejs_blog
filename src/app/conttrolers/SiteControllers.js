class SiteController {
  //[GET] /homehome
  index(req, res) {
    res.render("home");
  }
  // [GET] ./searchsearch
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();

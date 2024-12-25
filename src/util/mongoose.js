module.exports = {
  // trả về nhiều object
  multipleMongooseToObject: function (mongoose) {
    return mongoose.map((mongoose) => mongoose.toObject());
  },

  // trar về 1 objectobject
  mongooseToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};


var reviewSchema = new mongoose.Schema({
  title: { type: String, required: [true, "Title is required"], min: [2, "Title is too short"], max: [28, "Too long"] },
  date: {
    type: String,
    required: [true, "Date is required"],
    validate: {
             isAsync: true,
             validator: function(v, cb) {
               setTimeout(function() {
                 var phoneRegex = /\d{4}-\d{2}-\d{2}/;
                 var msg = v + ' is not a valid date!';
                 cb(phoneRegex.test(v), msg);
               }, 5);
             },
             message: 'Error'
           },
    },
  description: { type: String, required: [true, "Description is required"], min: [10, "Not long enough"], max: [255, "Too long"] },
  content: [{ type: String, required: [true, "Content is required"] }],
  rating: { type: Number, required: [true, "Rating is required"] },
  _tags: [{ type: String, min: [2, "Too short"], max: [255, "Too long"] }],
  _pros: [{ type: String, min: [2, "Too short"], max: [255, "Too long"] }],
  _cons: [{ type: String, min: [2, "Too short"], max: [255, "Too long"] }],
  recommended: { type: String, required: [true, "Recommendation is required"], min: [2, "Too short"], max: [255, "Too long"] },
  img: {
    data: Buffer,
    fileName: String,
    contentType: String
  }
}, {timestamps: true});

mongoose.model('Review', reviewSchema);

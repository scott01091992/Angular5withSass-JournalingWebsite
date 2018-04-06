
var reviewSchema = new mongoose.Schema({
  title: String,
  date: String,
  description: String,
  content: [String],
  rating: Number,
  _tags: [String],
  _pros: [String],
  _cons: [String],
  recommended: String,
  img: {
    data: Buffer,
    fileName: String,
    contentType: String 
  }
}, {timestamps: true});

mongoose.model('Review', reviewSchema);

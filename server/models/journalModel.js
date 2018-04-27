var journalEntrySchema = new mongoose.Schema({
  title: { type: String, required: [true, "Title is required"], min: [2, "Title too short"], max: [28, "Title too long"] },
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
  content: [{ type: String, required: [true, "Content is empty"], min: [10, "Needs more content"] }],
  productivity: { type: String, required: [true, "Productivity Error"], max: [3, "Invalid Productivity Value"] },
  goal: { type: String, required: [true, "Goal Required"], min: [2, "Goal too short"], max: [255, "Way too many characters"] },
  learned: { type: String, required: [true, "Missing what I learned"], min: [10, "Not long enough"], max: [255, "Too long"] },
  img: {
    data: Buffer,
    fileName: String,
    contentType: String
  },
  thoughts: { type: String, required: [true, "Missing thoughts"], min: [10, "Please provide your thoughts"], max: [255, "Too Long"] },
  emotion: { type: String, required: [true, "Mood is required"], max: [28, "Error"] },
  emotionimg: { type: String, required: [true, "Error"], max: [28, "Error"] },
  _tags: [{ type: String, max: [28, "Too long"] }]
}, {timestamps: true});

mongoose.model('JournalEntry', journalEntrySchema);

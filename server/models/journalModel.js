var journalEntrySchema = new mongoose.Schema({
  title: String,
  date: String,
  content: [String],
  productivity: String,
  goal: String,
  learned: String,
  img: {
    data: Buffer,
    fileName: String,
    contentType: String
  },
  thoughts: String,
  emotion: String,
  emotionimg: String,
  _tags: [String]
}, {timestamps: true});

mongoose.model('JournalEntry', journalEntrySchema);

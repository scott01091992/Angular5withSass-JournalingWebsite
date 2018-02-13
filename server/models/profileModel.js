var profileSchema = new mongoose.Schema({
  profilepic: String,
  about: {
    name: String,
    dob: String,
    location: String,
  },
  description: String,
  values: [String],
  goals: {
    primary: [String],
    shortTerm: [String],
    longTerm: [String]
  },
  weaknesses: [String],
  strengths: [String],
  interests: {
    optimization: {
      imgpath: String,
      list: [String]
    }
    ,
    design: {
      imgpath: String,
      list: [String]
    },
    development: {
      imgpath: String,
      list: [String]
    },
    gaming: {
      imgpath: String,
      list: [String]
    },
    science: {
      imgpath: String,
      list: [String]
    },
    investigation: {
      imgpath: String,
      list: [String]
    },
    miscellaneous: {
      imgpath: String,
      list: [String]
    }
  }
}, {timestamps: true});

mongoose.model('Profile', profileSchema);

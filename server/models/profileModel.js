var profileSchema = new mongoose.Schema({
  profilepic: { type: String, required: [true, "No Profile Picture Detected"] },
  about: {
    name: { type: String, required: [true, "Name is required"], min: [2, "Name is too Short"], max: [50, "Name is too Long"] },
    dob: { type: String, required: [true, "DOB is required"] },
    location: { type: String, required: [true, "Location is required"], min: [2, "Location name is too Short"], max: [150, "Location name is too Long"] },
  },
  description: { type: String, required: [true, "Description cannot be empty"], min: [2, "Description too short"], max: [255, "Keep the description short"] },
  values: [{ type: String, min: [2, "Not enough characters"], max: [30, "Needs to be shorter"] }],
  goals: {
    primary: [{ type: String, min: [2, "Goals should be a bit more specific"], max: [255, "Think twitter post length, dont write a novel"] }],
    shortTerm: [{ type: String, min: [2, "Goals should be a bit more specific"], max: [255, "Think twitter post length, dont write a novel"] }],
    longTerm: [{ type: String, min: [2, "Goals should be a bit more specific"], max: [255, "Think twitter post length, dont write a novel"] }]
  },
  weaknesses: [{ type: String, min: [2, "Weakness should be a bit more specific"], max: [255, "Think twitter post length, dont write a novel"] }],
  strengths: [{ type: String, min: [2, "Strength should be a bit more specific"], max: [255, "Think twitter post length, dont write a novel"] }],
  interests: {
    optimization: {
      imgpath: String,
      list: [{ type: String, min: [5, "Not enough characters"], max: [30, "Needs to be shorter"] }]
    }
    ,
    design: {
      imgpath: String,
      list: [{ type: String, min: [5, "Not enough characters"], max: [30, "Needs to be shorter"] }]
    },
    development: {
      imgpath: String,
      list: [{ type: String, min: [5, "Not enough characters"], max: [30, "Needs to be shorter"] }]
    },
    gaming: {
      imgpath: String,
      list: [{ type: String, min: [5, "Not enough characters"], max: [30, "Needs to be shorter"] }]
    },
    science: {
      imgpath: String,
      list: [{ type: String, min: [5, "Not enough characters"], max: [30, "Needs to be shorter"] }]
    },
    investigation: {
      imgpath: String,
      list: [{ type: String, min: [5, "Not enough characters"], max: [30, "Needs to be shorter"] }]
    },
    miscellaneous: {
      imgpath: String,
      list: [{ type: String, min: [5, "Not enough characters"], max: [30, "Needs to be shorter"] }]
    }
  }
}, {timestamps: true});

mongoose.model('Profile', profileSchema);

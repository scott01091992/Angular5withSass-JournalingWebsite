var journalEntry = mongoose.model('JournalEntry');

module.exports = (function(){
  return {
    get: function(req, res){
      journalEntry.findOne().sort({created_at: -1}).exec(function(err, entry){
        if(err){
          console.log(err);
        }else{
          res.json(entry);
        }
      })
    },
    upload: function(req, res){
      upload(req,res,function(err){
        if(err){
             res.json({error_code:1,err_desc:err});
             return;
        }else{
          var ent = new journalEntry(JSON.parse(req.body.data));
          ent.img.fileName = req.file.originalname;
          ent.img.contentType = "image/jpg";
          ent.img.data = fs.readFileSync("./server/Images/"+req.file.originalname)
          ent.save(function(err, ent){
            if(err){
              console.log(err);
            }else{
              console.log("Saved Journal Entry");
            }
          })
        }
      })
    },
    recent: function(req, res){
      journalEntry.find({}, 'title date').sort({'date': -1}).limit(8).exec(function(err, entries){
        if(err){
          console.log(err);
        }else{
          res.json(entries);
        }
      })
    },
    timeline: function(req, res){
      journalEntry.find({}, 'productivity date').sort({'date': -1}).limit(7).exec(function(err, timeline){
        if(err){
          console.log(err);
        }else{
          res.json(timeline);
        }
      })
    },
    calendar: function(req, res){
      journalEntry.find({}, 'date').sort({'date': -1}).limit(32).exec(function(err, cal){
        if(err){
          console.log(err);
        }else{
          res.json(cal);
        }
      })
    },
    journal: function(req, res){
      console.log(req.params);
      journalEntry.findById(req.params.id, function(err, entry){
        if(err){
          console.log(err);
        }else{
          res.json(entry);
        }
      })
    }
  }
})();

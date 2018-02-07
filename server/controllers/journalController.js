var journalEntry = mongoose.model('JournalEntry');

module.exports = (function(){
  return {
    get: function(req, res){
      console.log("IM HERE");
      journalEntry.findOne().sort({created_at: -1}).exec(function(err, entry){
        if(err){
          console.log(err);
        }else{
          console.log(entry);
          res.json(entry);
        }
      })
    }
  }
})();

var journalEntry = mongoose.model('JournalEntry');

module.exports = (function(){
  return {
    get: function(req, res){
      journalEntry.findOne({date: "02/02/2018"}, function(err, entry){
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

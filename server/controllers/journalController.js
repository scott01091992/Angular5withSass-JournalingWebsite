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
    },
    upload: function(req, res) {
          uploadJournal(req,res,function(err){
              if(err){
                   res.json({error_code:1,err_desc:err});
                   return;
              }
               res.json({error_code:0,err_desc:null});
        });
    }
  }
})();

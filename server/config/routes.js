var journalEntry = require('./../controllers/journalController.js');
var review = require('./../controllers/reviewController.js');

module.exports = function(app){
  app.get('/latestJournal', journalEntry.get);
  app.get('/latestReview', review.get);

  app.post('/upload', function(req, res) {
        upload(req,res,function(err){
            console.log(req.file);
            if(err){
                 res.json({error_code:1,err_desc:err});
                 return;
            }
             res.json({error_code:0,err_desc:null});
      });
  });
}

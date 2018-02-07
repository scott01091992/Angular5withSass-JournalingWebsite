var journalEntry = require('./../controllers/journalController.js');
var review = require('./../controllers/reviewController.js');

module.exports = function(app){
  app.get('/latestJournal', journalEntry.get);
  app.get('/latestReview', review.get);
}

var journalEntry = require('./../controllers/journalController.js');
var review = require('./../controllers/reviewController.js');
var profile = require('./../controllers/profileController.js');

module.exports = function(app){
  app.get('/latestJournal', journalEntry.get);
  app.get('/latestReview', review.get);
  app.get('/userProfile', profile.get);
  app.post('/uploadJournal', journalEntry.upload);
  app.post('/uploadReview', review.upload);
}

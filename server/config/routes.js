var journalEntry = require('./../controllers/journalController.js');
var review = require('./../controllers/reviewController.js');
var profile = require('./../controllers/profileController.js');

module.exports = function(app){
  app.get('/latestJournal', journalEntry.get);
  app.get('/latestReview', review.get);
  app.get('/userProfile', profile.get);
  app.post('/uploadEntry', journalEntry.upload);
  app.post('/uploadReview', review.upload);
  app.get('/recentEntries', journalEntry.recent);
  app.get('/timeline', journalEntry.timeline);
  app.get('/objectives', profile.objectives);
  app.get('/recentReviews', review.recent);
  app.get('/calendar/:id', journalEntry.calendar);
  app.get('/allReviews', review.all);
  app.get('/journal/:id', journalEntry.journal);
  app.get('/review/:id', review.review);
};

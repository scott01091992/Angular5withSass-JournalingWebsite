var journalEntry = require('./../controllers/journalController.js');

module.exports = function(app){
  app.get('/latestJournal', journalEntry.get);
}

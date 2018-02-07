var review = mongoose.model('Review');

module.exports = (function(){
  return {
    get: function(req, res){
      review.findOne().sort({created_at: -1}).exec(function(err, review){
        if(err){
          console.log(err);
        }else{
          res.json(review);
        }
      })
    }
  }
})();

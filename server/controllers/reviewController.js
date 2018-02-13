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
    },
    upload: function(req, res) {
          uploadReview(req,res,function(err){
              console.log(req.file);
              if(err){
                   res.json({error_code:1,err_desc:err});
                   return;
              }
               res.json({error_code:0,err_desc:null});
        });
    }
  }
})();

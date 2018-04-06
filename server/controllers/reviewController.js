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
      upload(req,res,function(err){
        if(err){
             res.json({error_code:1,err_desc:err});
             return;
        }else{
          var rev = new review(JSON.parse(req.body.data));
          rev.img.fileName = req.file.originalname;
          rev.img.contentType = "image/jpg";
          rev.img.data = fs.readFileSync("./server/Images/"+req.file.originalname)
          rev.save(function(err, rev){
            if(err){
              console.log(err);
            }else{
              console.log("Saved Review");
            }
          })
        }
      })
    },
    recent: function(req, res){
      review.find({}, 'title date').sort({'date': -1}).limit(8).exec(function(err, reviews){
        if(err){
          console.log(err);
        }else{
          res.json(reviews);
        }
      })
    },
    all: function(req, res){
      review.find({}, 'title img').sort({'date': -1}).limit(20).exec(function(err, reviews){
        if(err){
          console.log(err);
        }else{
          res.json(reviews);
        }
      })
    },
    review: function(req, res){
      review.findById(req.params.id, function(err, review){
        if(err){
          console.log(err);
        }else{
          res.json(review);
        }
      })
    }
  }
})();

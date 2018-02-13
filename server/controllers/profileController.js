var profile = mongoose.model('Profile');

module.exports = (function(){
  return {
    get: function(req, res){
      profile.findOne().sort({created_at: -1}).exec(function(err, profile){
        if(err){
          console.log(err);
        }else{
          res.json(profile);
        }
      })
    }
  }
})();

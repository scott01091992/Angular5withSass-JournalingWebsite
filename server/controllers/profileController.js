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
    },
    objectives: function(req, res){
      profile.findOne({}, 'goals').sort({created_at: -1}).limit(1).exec(function(err, obj){
        if(err){
          console.log(err);
        }else{
          res.json(obj);
        }
      })
    }
  }
})();

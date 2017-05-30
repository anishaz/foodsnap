let mongoose = require('mongoose');

let User = mongoose.model('User');
let Image = mongoose.model('Image');

module.exports = {
  login: (req,res) => {
    User.findOne({email: req.body.email}, (err, user) => {
      if(err){
        console.log(err);
        return res.sendStatus(500);
      }else {
        req.session.user = user;
        return res.json(user);
      }
    })
  },

}

let mongoose = require('mongoose');
let bcrypt = require('bcrypt');

let User = mongoose.model('User');
let Image = mongoose.model('Image');

module.exports = {
  login: (req,res) => {
    User.findOne({email: req.body.email}, (err, user) => {
      if(err){
        console.log(err);
        return res.sendStatus(500);
      }else if(user == null) {
        return res.status(500).send("User does not exist")
      } else {
        console.log("User logged in");
        req.session.user = user;
        return res.json(user);
      }
    })
  },

  register: (req,res) => {
    User.findOne({email: req.body.email}, (err, user) => {
      if(user == null){
        let newUser = new User(req.body);
        newUser.save((err, savedUser) => {
          if(err){
            let errors = "";
            for(let i in err.errors){
              errors += err.errors[i].message + ',';
            }
            return res.status(500).send(errors);
          }else {
            console.log("User is saved")
            req.session.user = savedUser;
            return res.json(savedUser);
          }
        })
      }
    })
  },

  current: (req,res) => {
    if(req.session.user){
      return res.json(req.session.user);
    }
  },

  logout: (req,res) => {
    req.session.destroy();
    console.log('logged out');
    res.redirect('/');
  },

  upload: (req,res,next) => {
    var path = '';
    upload(req,res, function(err) {
      if(err){
        console.log(err);
        return res.status(422).send("An Error Occurred")
      }
      path = req.file.path;
      return res.send("Upload completed for "+path);
    });
  },

}

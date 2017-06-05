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

  upload: (req,res) => {
    if(!req.session.user){
      return res.status(500).send("no user")
    }else{
      let newImage = new Image(req.body);
      newImage._user = req.session.user._id
      newImage.save((err, savedImage) => {
        if(err){
          console.log(err);
        } else {
          console.log("Image is saved");
          return res.json(savedImage);
        }
      })

    }
  },

  getImages: (req,res) => {
    Image.find({},(err,allimages)=>{
      if(err){
        console.log(err);
      }else{
        return res.json(allimages);
      }
    })
  },

  showprofile: (req,res)=>{
    if(!req.session.user){
      return res.status(500).send("no such a user")
    }else{
      console.log("Lets go!!")
      Image.find({_user:req.params.id}, (err,images)=>{
        if(err){
          console.log(err)
        }else{
          console.log("YEAH!!!!")
          return res.json(images)
        }
      })
    }
  },

  addLike: (req,res) => {
    Image.findOne({_id: req.body.id}, (err, message) => {
      if(err){
        console.log(err);
        return res.sendStatus(500);
      } else {
        if(image.like.indexOf(req.session.user._id) != -1) {
          return res.json(image);
        }
        image.like.push(req.session.user._id);
        console.log("I've been pushed", image);
        image.save((err, savedImage) => {
          if(err){
            console.log(err);
          } else {
            return res.json(savedImage);
          }
        })
      }
    })
  }

}

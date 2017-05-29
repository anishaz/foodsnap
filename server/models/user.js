let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new mongoose.Schema({
  first_name: {
    type:String,
    required:[true,"First name is required."],
    min: [3, "Minimum length is 3 characters."],
    max: [20, "Maximum length is 20 characters."]
  },
  last_name: {
    type:String,
    required:[true,"Last name is required."],
    min: [3, "Minimum length is 3 characters."],
    max: [20, "Maximum length is 20 characters."]
  },
  email: {
    type:String,
    required:[true,"An email address is required."],
    lowercase: true,
    validate: function(email) {
      return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    }
  },
  password: {
    type:String,
    required:[true,"Password is required."],
  },
  role: {
    type:String,
    enum:['user', 'admin'],
    default: 'user'
  },
  _images: [{type:Schema.Types.ObjectId, ref: 'Image'}],
}, {timestamps:true});

mongoose.model('User', UserSchema);

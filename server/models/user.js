let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new mongoose.Schema({
  first_name: {type:String, required:[true,"First name is required."]},
  last_name: {type:String, required:[true,"Last name is required."]},
  email: {type:String, required:[true,"An email address is required."]},
  password: {type:String, required:[true,"Password is required."]},
  _images: [{type:Schema.Types.ObjectId, ref: 'Image'}],
}, {timestamps:true});

mongoose.model('User', UserSchema);

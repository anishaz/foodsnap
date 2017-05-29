let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ImageSchema = new mongoose.Schema({
  name: {type:String, required:[true,"Name is required."]},
  _user: {type:Schema.Types.ObjectId, ref: 'User'},
}, {timestamps:true});

mongoose.model('Image', ImageSchema);

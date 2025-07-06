import mongoose from 'mongoose';
import { type } from 'os';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: String,
  createdAt: { type: Date, default: Date.now },
  preferences: {
    voiceEnabled: { type: Boolean, default: true },
    language: { type: String, default: 'en' }
  },
  password : {type:String,required:true},
  conversations:[{type:mongoose.Schema.Types.ObjectId,ref:"Chat"}]
});

export default mongoose.model('User', userSchema);

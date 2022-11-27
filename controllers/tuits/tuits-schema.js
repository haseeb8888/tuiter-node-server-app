import mongoose from 'mongoose';
const schema = mongoose.Schema({
  userName: String,
  handle: String,
  image: String,
  title: String,
  topic: String,
  time: String,
  replies: Number,
  retuits: Number,
  dislikes: Number,  
  tuit: String,
  likes: Number,
  liked: Boolean,
}, {collection: 'tuits'});
export default schema;
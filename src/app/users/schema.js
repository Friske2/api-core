import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const user = new Schema({
  name: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

export default user;

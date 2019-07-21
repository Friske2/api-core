import mongoose from 'mongoose';
import UserSchema from './schema';

const user = mongoose.model('users', UserSchema);
const model = {
  find() {
    return new Promise((resolve, reject) => {
      user
        .find({})
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  findById(params) {
    return new Promise((resolve, reject) => {
      user
        .findById(params)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  save(value) {
    return new Promise((resolve, reject) => {
      const data = new user(value);
      data
        .save()
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  update(value) {
    return new Promise((resolve, reject) => {
      user
        .findByIdAndUpdate(value._id, value)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  delete(params) {
    return new Promise((resolve, reject) => {
      user
        .findByIdAndRemove(params)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
export default model;

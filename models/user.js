var mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  progressTracker: {
    quest1: {
      dateSubmitted: String,
      approved: false
    },
    quest2: {
      dateSubmitted: String,
      approved: false
    },
    quest2: {
      dateSubmitted: String,
      approved: false
    }
  }
});

// const UserSchema = new mongoose.Schema({
//   studentname: String,
//   password: String,
//   picture: String,
//   name: String,
//   phone: Number,
//   email: String,
//   bio: String,
//   experience: [],
//   education: [],
//   skills: [],
//   projects: [],
//   expertise: [],
//   gamestats: { type: Map },
//   inventory: { type: Map },
//   progressTracker: {
//     quest1: {
//       dateSubmitted: String,
//       approved: false
//     },
//     quest2: {
//       dateSubmitted: String,
//       approved: false
//     },
//     quest2: {
//       dateSubmitted: String,
//       approved: false
//     }
//   }
// });

const User = mongoose.model('User', UserSchema);

// module.exports = { User, Admin };
module.exports =  User;

// module.exports = ("User", UserSchema);
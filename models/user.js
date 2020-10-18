var mongoose = require('mongoose');

// const AdminSchema = new mongoose.Schema({
//   username: String,
//   password: String,
//   students: []
// });

const UserSchema = new mongoose.Schema({
  username: String,
  password: String
});

// const UserSchema = new mongoose.Schema({
//   studentname: String,
//   password: String,
//   picture: String,
//   email: String,
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
// const Admin = mongoose.model('Admin', AdminSchema);

// module.exports = { User, Admin };
module.exports =  User;

// module.exports = ("User", UserSchema);
const router = require('express').Router();
const User = require('../controllers/users');

// Matches with "/api/v1/users"
router
  .route('/')
  .get(User.findAll)
  .post(User.create);

router
  .route('/register')
  .post(User.create);

// router
//   .route('/admin')
//   .get(User.findAllAdmin)
//   .post(User.createAdmin);

// Matches with "/api/v1/users/:id"
router
  .route('/id/:id')
  .get(User.findById)
  .put(User.updateById);

// router
//   .route('/adminid/:id')
//   .get(User.findByIdAdmin)
//   .put(User.updateByIdAdmin);

// Matches with "/api/v1/users/:email"
router
  .route('/email/:email')
  .get(User.findByEmail)
  .put(User.updateByEmail);

// Matches with "/api/v1/users/emailjs"
router
.route('/emailjs/:email')
.put(User.updateByEmailPush);

router
.route('/emailcp/:email')
.put(User.updateByEmailPushCP);

// matches with "/api/v1/users/emaildj"
router
.route('/emaildj/:email')
.put(User.findOneByEmailDel);

module.exports = router;

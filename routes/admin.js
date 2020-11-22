const router = require('express').Router();
const Admin = require('../controllers/users');

// Matches with "/api/v1/admin"
router
  .route('/')
  .get(Admin.findAllAdmin)
  .post(Admin.createAdmin);

  router
  .route('/id/:id')
  .get(Admin.findByIdAdmin)
  .put(Admin.updateByIdAdmin);

  module.exports = router;
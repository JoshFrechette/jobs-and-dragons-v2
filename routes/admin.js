const router = require('express').Router();
const Admin = require('../controllers/admin');

// Matches with "/api/v1/admin"
router
  .route('/')
  .get(Admin.findAll)
  .post(Admin.create);

  router
  .route('/admin')
  .get(Admin.findAllAdmin)
  .post(Admin.createAdmin);

  router
  .route('/adminid/:id')
  .get(Admin.findByIdAdmin)
  .put(Admin.updateByIdAdmin);

  module.exports = router;
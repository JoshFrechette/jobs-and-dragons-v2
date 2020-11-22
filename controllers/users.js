const db = require('./../models/index');

module.exports = {
  findAll: function (req, res) {
    db.User.User.find({})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User.User.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function (req, res) {
    db.User.User.findOne({ email: req.params.email })
      .then(user => {
        if (user) {
          return res.json({
            success: true,
            data: user
          });
        }
        return res.json({
          success: false
        });
      })
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log(db.User)
    console.log(req.body, "at controller")
    db.User.User.create(req.body)
      .then(user =>
        res.json({
          success: true,
          data: user,
        })
      )
      .catch(err => res.status(422).json(err));
  },
  updateById: function (req, res) {
    db.User.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
  },
  updateByEmail: function (req, res) {
    db.User.findOneAndUpdate({ email: req.params.email }, req.body)
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
  },
  findOneByEmailDel: function (req, res) {
    db.User.findOneAndUpdate({ email: req.params.email }, { $pull: { jobsearch: { id: req.body.id } } }, { new: true })
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
  },
  updateByEmailPush: function (req, res) {
    db.User.findOneAndUpdate({ email: req.params.email }, { $push: { jobsearch: req.body } })
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
  },
  updateByEmailPushCP: function (req, res) {
    db.User.findOneAndUpdate({ email: req.params.email }, { $push: { coverpage: req.body } })
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User.findOneAndDelete({ id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createAdmin: function (req, res) {
    console.log(db, "at")
    db.User.Admin.create(req.body)
      .then(user =>
        res.json({
          success: true,
          data: user
        })
      )
      .catch(err => res.status(422).json(err));
  },
  findAllAdmin: function (req, res) {
    db.User.Admin.find({})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByIdAdmin: function (req, res) {
    db.User.Admin.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateByIdAdmin: function (req, res) {
    db.User.Admin.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
  },
};

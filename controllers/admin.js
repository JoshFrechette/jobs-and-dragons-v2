const db = require('../models/index.js');

module.exports = {

    createAdmin: function (req, res) {
        db.Admin.create(req.body)
            .then(user =>
                res.json({
                    success: true,
                    data: user
                })
            )
            .catch(err => res.status(422).json(err));
    },
    findAllAdmin: function (req, res) {
        db.Admin.find({})
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByIdAdmin: function (req, res) {
        db.Admin.findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    updateByIdAdmin: function (req, res) {
        db.Admin.findOneAndUpdate({ id: req.params.id }, req.body)
            .then(user => res.json(user))
            .catch(err => res.status(422).json(err));
    },
};
const db = require("../models");
const user = db.users;
const Op = db.Sequelize.Op;

exports.searchusername = (req, res) => {
  // Get search term and filter data for titles with the search term
  const term = req.params.searchTerm;
  user.findOne({
    where: {
      username: term
    }
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving username."
      });
    });
};

exports.update = (req, res, next) => {
  const term = req.params.searchTerm;
  user.findOne({
    where: {
      username: term
    }
  })
    .then(data => {
      data.set({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        password: req.body.password,
        age: req.body.age,
        gender: req.body.gender,
        email: req.body.school_email,
        organisation: req.body.organisation,
        role: req.body.role
      })
      console.log(data);
      data.save();
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving username."
      });
    });
};

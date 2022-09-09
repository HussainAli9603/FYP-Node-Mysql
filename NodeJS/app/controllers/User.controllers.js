const db = require("../models");
const nodemailer = require('nodemailer');
const user = db.users;

// Search Role & Retrieve all Users Data from the database
exports.searchfindAll = (req, res) => {
  const role = req.query.role;

  user.findAll({
    where: { role: role || 0 }
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

// Find 1 user
exports.findOne = (req, res) => {
  const id = req.params.id;

  user.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
};

// Delete a user with the specified id in the request
exports.delete = (req, res) => {
  const user_id = req.params.id;

  user.destroy({
    where: { user_id: user_id }
  })
    .then(user_id => {
      if (user_id == 1) {
        res.send({
          message: "user was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${user_id}. Maybe user was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete user with id=" + user_id
      });
    });
};

//Send Email that the user has been deleted
exports.sendMail = (req, res) => {

  var smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'usingforcoding@gmail.com',
      pass: 'lrbirtqstxaxzuey',
    }
  });

  var mailOption = {
    from: 'usingforcoding@gmail.com',
    to: 'usingforcoding@gmail.com',
    subject: 'Deleted User Account',
    html: `

    <p> Information </p>
    Your account has been deleted!
    
    `
  }

  smtpTransport.sendMail(mailOption, (error, response) => {
    if (error) {
      console.log(error)
    }
    else {
      console.log('Mail Sended', response)
    }
  })

  smtpTransport.close;

};



// Update a User by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  user.findByPk(id)
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
        message: "Error updating User with id=" + id
      });
    });
};

exports.AddUser = (req, res) => {
  // Create new User and insert into table
  const newUser = user.build({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    username: req.body.username,
    password: req.body.password,
    age: req.body.age,
    gender: req.body.gender,
    school_email: req.body.school_email,
    organisation: req.body.organisation,
    role: req.body.role
  });
  newUser.save();
}
const db = require("../models");
const user = db.users;

exports.checkUsers = (req, res) => {
  const term = req.params.username;
  const pass = req.params.password;

  user.findAll({
    where: {
      username: term,
      password: pass,
      role: "Admin"
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
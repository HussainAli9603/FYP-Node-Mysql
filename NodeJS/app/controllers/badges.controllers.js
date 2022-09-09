const db = require("../models");
const badges = db.badges;
const Op = db.Sequelize.Op;

// Retrieve all Badges Data from the database.
exports.searchBadgeName = (req, res) => {
  const name = req.query.searchName;

    badges.findAll({ 
      where: { badge_name: name || 0 }
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving badge."
        });
      });
  };
  
  // Add badges
  exports.AddBadge = (req, res) => {
    // Create new Badge and insert into table
    const newBadge = badges.build({
      badge_name: req.body.badge_name,
      badge_description: req.body.badge_description
    });
    newBadge.save();
  }

  // Update a User by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  badges.findByPk(id)
    .then(data => {
      data.set({
        badge_name: req.body.badge_name,
        badge_description: req.body.badge_description
      })
      console.log(data);
      data.save();
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating badge with id=" + id
      });
    });
};

// Retrieve Single Badge Data from the database
exports.findBadge = (req, res) => {
  const id = Number(req.params.id)
  badges.findByPk(id)
      .then(data => {
          res.send(data);
      })
      .catch(err => {
          res.status(500).send({
              message: err.message || "Some error occurred while retrieving Badge."
          });
      })
};


// Retrieve Single Badges Data from the database
// exports.findBadge = (req, res) => {
//     const id = Number(req.params.id)
//     badges.findByPk(id)
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred while retrieving user."
//             });
//         })
// };

// exports.searchBadges = (req, res) => {
//     // Get search term and filter data for titles with the search term
//     const term = req.params.searchTerm;
//     badges.findAll({
//             where: {
//                 badges: {
//                     [Op.like]: '%' + term + '%'
//                 }
//             }
//         })
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred while retrieving users."
//             });
//         });
// };

// exports.editBadge = (req, res, next) => {
//     // Update badge details using badge id
//     const id = Number(req.params.id);
//     badges.findByPk(id)
//         .then(data => {
//             data.set({
//                 badges_description: req.body.badges_description
//             })
//             console.log(data);
//             data.save();
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred while retrieving user."
//             });
//         })
// };

// exports.addBadge = (req, res) => {
//     // Create new badge and insert into table
//     const newInstance = badges.build({
//         badge_name: req.body.badge_name,
//         badge_description: req.body.badge_description,
//     });

//     newInstance.save();

    // .then(data => {
    //     data.save();
    //     console.log(data);
    // })
    // .catch(err => {
    //     res.status(500).send({
    //         message: err.message || "Some error occurred while retrieving users."
    //     });
    // });
// }
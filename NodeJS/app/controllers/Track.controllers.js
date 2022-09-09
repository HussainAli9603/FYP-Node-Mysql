const db = require("../models");
const user = db.users;
const tracks = db.tracks;

// Find tracks by user id
exports.trackfindOne = (req, res) => {
  const id = req.params.id;
  tracks.findAll({attributes: ["tracks_id","track_name", "track_description", "track_provider"],
    include: [
      {
        model: user,
        attributes: ["username"],
        where: {user_id : id},
        through: {
          attributes: [],
        },
      },
    ],
  })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find tracks with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving tracks with id=" + id
      });
    });
};
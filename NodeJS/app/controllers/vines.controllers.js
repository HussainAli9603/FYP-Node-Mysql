const db = require("../models");
const vines = db.vines;
const Op = db.Sequelize.Op;

// Retrieve all Vines Data from the database.

exports.searchVineName = (req, res) => {

    vines.findAll({})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving vines."
        });
    });
};

// Retrieve Single Vine Data from the database

exports.findVine = (req, res) => {
    const id = Number(req.params.id)
    vines.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving vines."
        });
    })
};


// Add New Vine and create new Vine inside table

exports.AddVine = (req,res) => {

    const newVine = vines.build({
        vine_name: req.body.vine_name,
        vine_description: req.body.vine_description
    });

    newVine.save();
}

// Update Vine Details with the use of ID

exports.updateVine = (req, res) => {

    const id = req.params.id;

    vines.findByPk(id)
    .then(data => {
        data.set({
            vine_name: req.body.vine_name,
            vine_description: req.body.vine_description
        })
        console.log(data);
        data.save();
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Vine by given ID" + id
        });
    });
};








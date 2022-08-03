const db = require("../model");
const User = db.users;
const Op = db.Sequelize.Op;
const Profil = db.profils;

const create = (req, res,user) => {
    // Validate request
    if (!req.body.firstname) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a profil
    const profil = {
      firstname: req.body.firstname,
      lastename: req.body.lastename,
      country: req.body.country,
      age: req.body.age,
      typeProfile: req.body.typeProfile,
      profilUserid: user.userid
    };

    // Save User and Account in the database
    Profil.create(profil)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving user."
        });
      });
  };

  const findAll = (req, res) => {
    const lastename = req.query.lastename;
    var condition = lastename ? { lastename: { [Op.like]: `%${lastename}%` } } : null;
    Profil.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving user."
        });
      });
  };

  const findOne = (req, res) => {
    const id = req.params.id;
    Profil.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find user with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving user with id=" + id
        });
      });
  };

  const update = (req, res) => {
    const id = req.params.id;
    Profil.update(req.body, {
      where: { idProfil: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Profil was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update User with id=${id}. Maybe user was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating user with id=" + id
        });
      });
  };

  module.exports = {
    create,
    findAll,
    findOne,
    update
}
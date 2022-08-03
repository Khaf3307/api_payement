const db = require("../model");
const jwt = require('jsonwebtoken');

const User = db.users;
const Op = db.Sequelize.Op;
const Account = db.accounts;
const Profil = db.profils;
const Article = db.articles;
const Transaction = db.transactions;

const create = (req, res,next) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
      const id = req.params.id;
      User.findByPk(id).then((transaction)=>{
        Transaction.create({
          status: "en attente",
          typeTransac: "debit",
          currency: "XOF",
          userUserid: transaction.userid
        }).then((articles)=>{ 
         Article.create({
          name: req.body.name,
          unitPrice: req.body.unitPrice,
          quantity: req.body.quantity,
          totalPrice: req.body.totalPrice,
          transactionIdTransaction: articles.idTransaction
        })
         .then((data) => {
             res.status(201).json(
              {status: 201,
                data: data,
                message: "New article added successfully"});
             }) })
      })
      
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the user."
        });
      });
  };
  

  const findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
    Article.findAll({ where: condition })
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
    Article.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find articles with user id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving article with user id=" + id
        });
      });
  };

  const update = (req, res) => {
    const id = req.params.id;
    Article.update(req.body, {
      where: { userid: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Article with user id=${id}. Maybe user was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating article with id=" + id
        });
      });
  };


  module.exports = {
    create,
    findAll,
    findOne,
    update
}
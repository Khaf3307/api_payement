require("dotenv").config();
const db = require("../model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
//const dotenv = require('dotenv')

const User = db.users;
const Op = db.Sequelize.Op;
const Account = db.accounts;
const Profil = db.profils;

const create = (req, res,next) => {
    // Validate request
    if (!req.body.login) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    
    const users = {
      login: req.body.login,
      password: req.body.password,
      password_confirm: req.body.password_confirm
    };
    if(req.body.password_confirm !== req.body.password)
    {
      res.status(400).send({
        message: "Password not match!"
      });
      //return;
    }
    else{
    // Save User and Account in the database
    // Email
    // TEST LOGIN IF EXIST
    User.findOne({
      where: {
        login: req.body.login
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Failed! Email is already in use!"
        });
        return;
      }else{
        User.create(users)
      .then((user)=>{ 
         Profil.create({
          firstname: "cherif",
          lastname: "ba",
          country: "senegal",
          age: "18",
          typeProfile: "marchand",
          profilUserid: user.userid,}),
          Account.create({
            balance: "0",
            currency: "xof",
            accountUserid: user.userid,
          })
         .then((data) => {
             res.status(201).json(
              {status: 201,
                data: data,
                message: "New user added successfully"});
             }) })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the user."
        });
      });
      }
      //next();
      
    })
    }
  };

  const findAll = (req, res) => {
    const login = req.query.login;
    var condition = login ? { login: { [Op.like]: `%${login}%` } } : null;
    User.findAll({ where: condition })
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
    User.findByPk(id)
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
    User.update(req.body, {
      where: { userid: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was updated successfully."
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

  const updateAccount = (req, res) => {
    const id = req.params.id;
    Account.update(req.body, {
      where: { accountUserid: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Account user was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Account with id=${id}. Maybe user was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating user with id=" + id
        });
      });
  };

  const auth = async(req,res,next)=>{
    User.findOne({
      where: {
        login: req.body.login
      }
    })
      .then(user => {
        if (!user) {
          return res.status(401).json({
            message:
              "Auth failed!! either the account does't exist or you entered a wrong account"
          });
        }
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (err) {
            return res.status(401).json({
              message: "Auth failed",
              token: token
            });
          }
          if (result) {
            const token = jwt.sign(
              {
                login: user.login,
                password: user.id
              },
              process.env.JWT_KEY,
              {
                expiresIn: "1h"
              }
            );
  
            res.status(200).json({
              message: "Auth granted, welcome!",
              token: token
            });
          }
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  };

  module.exports = {
    create,
    findAll,
    findOne,
    update,
    auth,
    updateAccount
}
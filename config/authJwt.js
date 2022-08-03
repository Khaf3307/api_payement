const jwt = require("jsonwebtoken");
const config = require("../config/auth_config.js");
const db = require("../models");
const User = db.user;
verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userid = decoded.id;
    next();
  });
};
isMarchand = (req, res, next) => {
  User.findByPk(req.userid).then(user => {
    user.getTypes().then(types => {
      for (let i = 0; i < types.length; i++) {
        if (types[i].name === "marchand") {
          next();
          return;
        }
      }
      res.status(403).send({
        message: "Require Marchand Role!"
      });
      return;
    });
  });
};
isClient = (req, res, next) => {
  User.findByPk(req.userid).then(user => {
    user.getTypes().then(types => {
      for (let i = 0; i < types.length; i++) {
        if (types[i].name === "client") {
          next();
          return;
        }
      }
      res.status(403).send({
        message: "Require Client Role!"
      });
    });
  });
};

const authJwt = {
  verifyToken: verifyToken,
  isMarchand: isMarchand,
  isClient: isClient
};
module.exports = authJwt;
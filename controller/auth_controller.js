// const db = require("../model");
// const config = require("../config/auth_config.js");
// const User = db.users;
// const Op = db.Sequelize.Op;
// var jwt = require("jsonwebtoken");
// var bcrypt = require("bcryptjs");

// exports.signin = (req, res) => {
//   User.findOne({
//     where: {
//       login: req.body.login
//     }
//   })
//     .then(user => {
//       if (!user) {
//         return res.status(404).send({ message: "User Not found." });
//       }
//       var passwordIsValid = bcrypt.compareSync(
//         req.body.password,
//         user.password
//       );
//       if (!passwordIsValid) {
//         return res.status(401).send({
//           accessToken: null,
//           message: "Invalid Password!"
//         });
//       }
//       var token = jwt.sign({ id: user.userid }, config.secret, {
//         expiresIn: 86400 // 24 hours
//       });
//       var authorities = [];
//       user.getTypes().then(types => {
//         for (let i = 0; i < types.length; i++) {
//           authorities.push("Type_" + types[i].name.toUpperCase());
//         }
//         res.status(200).send({
//           id: user.userid,
//           login: user.email,
//           types: authorities,
//           accessToken: token
//         });
//       });
//     })
//     .catch(err => {
//       res.status(500).send({ message: err.message });
//     });
// };
const User = require("../models/user");

module.exports = {
  create(req, res) {
    console.log(req.body);
    return User.findOne({ where: { codigo: req.body.codigo } })
      .then((foundedUser) => {
        if (!foundedUser) {
          console
            .log("oiiii")
           return User.create({
              name: req.body.name,
              birth: req.body.birth,
              photo: req.body.photo,
              codigo: req.body.codigo,
            })
            .then((user) =>  res.status(201).send(user))
            .catch((error) => {
              console.log(error);
              res.status(409).send(error);
            });
        } else {
          console.log("ja tem")
          return res.status(404).send({
            message: "Usuário já cadastrado",
          });
        }
      })
      .catch((error) => res.status(400).send(error));
  },

  list(req, res) {
    return User.findAll({
      order: [["createdAt", "DESC"]],
    })
      .then((users) => res.status(200).send(users))
      .catch((error) => res.status(400).send(error));
  },

  retrieve(req, res) {
    return User.findByPk(req.params.userId)
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: "User Not Found",
          });
        }
        return res.status(200).send(user);
      })
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return User.findByPk(req.params.userId)
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: "User Not Found",
          });
        }
        return user
          .update({
            name: req.body.name || user.name,
            birth: req.body.birth || user.birth,
            photo: req.body.photo || user.photo,
            codigo: req.body.codigo || user.codigo
          })
          .then(() => res.status(200).send(user))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
    return User.findByPk(req.params.userId)
      .then((user) => {
        if (!user) {
          return res.status(400).send({
            message: "User Not Found",
          });
        }
        return user
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};

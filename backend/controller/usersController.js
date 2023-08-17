const user = require("../model/usersModel");
const getuser = (req, res) => {
  user.getAll((result, error) => {
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(500).send(error);
    }
  });
};
const getOne = (req, res) => {
  user.getOne((result, error) => {
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(500).send(error);
    }
  }, req.params.id);
};
const getOneByEmail = (req, res) => {
  user.getOneByEmail((result, error) => {
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(500).send(error);
    }
  }, req.params.email);
};
const getOneByEmailandPass = (req, res) => {
  user.getOneByEmailandPass((result, error) => {
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(500).send(error);
    }
  }, req.params.email,req.params.password);
};
const adduser = (req, res) => {
  user.adduser((result, error) => {
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(500).send(error);
    }
  }, req.body);
};
const deleteuser = (req, res) => {
  user.deleteuser((result, error) => {
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(500).send(error);
    }
  }, req.params.id);
};
const updateuser = (req, res) => {
  user.updateuser(
    (result, error) => {
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(500).send(error);
      }
    },
    req.params.id,
    req.body
  );
};
module.exports = {
  getuser,
  getOne,
  getOneByEmail,
  getOneByEmailandPass,
  adduser,
  deleteuser,
  updateuser,
};

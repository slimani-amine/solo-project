const project = require("../model/projectModel");
const getproject = (req, res) => {
  project.getAll((result, error) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(result);
    }
  });
};
const getOne = (req, res) => {
  project.getOne((result, error) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(result);
    }
  }, req.params.id);
};
const getOneByOwner = (req, res) => {
  project.getOneByOwner((result, error) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(result);
    }
  }, req.params.owner);
};
const addproject = (req, res) => {
  project.addproject(
    (result, error) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(200).send(result);
      }
    },
    req.body,
    req.params.id
  );
};
const deleteproject = (req, res) => {
  project.deleteproject((result, error) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(result);
    }
  }, req.params.id);
};
const updateproject = (req, res) => {
  project.updateproject(
    (result, error) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(200).send(result);
      }
    },
    req.params.id,
    req.body
  );
};
module.exports = {
  getproject,
  getOne,
  getOneByOwner,
  addproject,
  deleteproject,
  updateproject,
};

const connection = require("../database-mysql/index");

const getAll = (callback) => {
  connection.query("select * from projects", function (error, result) {
    if (error) {
      callback(null, error);
    } else {
      callback(result, null);
    }
  });
};
const getOne = (callback, id) => {
  connection.query(
    "select * from projects where idprojects=?",
    [id],
    function (error, result) {
      if (error) {
        callback(null, error);
      } else {
        callback(result, null);
      }
    }
  );
};
const getOneByOwner = (callback,owner) => {
  connection.query(
    "select * from projects where owner=?",
    [owner],
    function (error, result) {
      if (error) {
        callback(null, error);
      } else {
        callback(result, null);
      }
    }
  );
};
const addproject = (callback, obj, id) => {
  connection.query(
    "insert into projects (name,description,viewlink,githubLinkRepo,sreenshotLink,owner) values (?,?,?,?,?,?)",
    [
      obj.name,
      obj.description,
      obj.viewlink,
      obj.githubLinkRepo,
      obj.sreenshotLink,
      id,
    ],
    function (error, result) {
      if (error) {
        callback(null, error);
      } else {
        callback(result, null);
      }
    }
  );
};
const deleteproject = (callback, id) => {
  connection.query(
    "delete from projects where idprojects=?",
    [id],
    function (error, result) {
      if (error) {
        callback(null, error);
      } else {
        callback(result, null);
      }
    }
  );
};
const updateproject = (callback, id, obj) => {
  connection.query(
    "update projects set name=?,description=?,viewlink=?,githubLinkRepo=?,sreenshotLink=?,owner=? where idprojects=?",
    [
      obj.name,
      obj.description,
      obj.viewlink,
      obj.githubLinkRepo,
      obj.sreenshotLink,
      obj.owner,
      id,
    ],
    function (error, result) {
      if (error) {
        callback(null, error);
      } else {
        callback(result, null);
      }
    }
  );
};

module.exports = { getAll, getOne,getOneByOwner, addproject, deleteproject, updateproject };

const connection = require("../database-mysql/index");

const getAll = (callback) => {
  connection.query("SELECT * FROM users", function (error, result) {
    if (error) {
      callback(null, error);
    } else {
      callback(result, null);
    }
  });
};

const getOne = (callback, id) => {
  connection.query(
    "select * from users where idusers=?",
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
const getOneByEmail = (callback, email) => {
  connection.query(
    "select * from users where email=?",
    [email],
    function (error, result) {
      if (error) {
        callback(null, error);
      } else {
        callback(result, null);
      }
    }
  );
};
const getOneByEmailandPass = (callback, email, password) => {
  connection.query(
    "select * from users where email=? and password=?",
    [email, password],
    function (error, result) {
      if (error) {
        callback(null, error);
      } else {
        callback(result, null);
      }
    }
  );
};
const adduser = (callback, obj) => {
  connection.query(
    "insert into users (userName,email,password,imageUrl,githubLink) values (?,?,?,?,?)",
    [obj.userName, obj.email, obj.password, obj.imageUrl, obj.githubLink],
    function (error, result) {
      if (error) {
        callback(null, error);
      } else {
        callback(result, null);
      }
    }
  );
};
const deleteuser = (callback, id) => {
  connection.query(
    "delete from users where idusers=?",
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
const updateuser = (callback, id, obj) => {
  connection.query(
    "update users set userName=?,email=?,password=?,imageUrl=?,githubLink=? where idusers=?",
    [obj.userName, obj.email, obj.password, obj.imageUrl, obj.githubLink, id],
    function (error, result) {
      if (error) {
        callback(null, error);
      } else {
        callback(result, null);
      }
    }
  );
};

module.exports = {
  getAll,
  getOne,
  getOneByEmail,
  getOneByEmailandPass,
  adduser,
  deleteuser,
  updateuser,
};

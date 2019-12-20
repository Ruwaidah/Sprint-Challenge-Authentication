const db = require("../database/dbConfig");
const bcrypt = require("bcryptjs");

module.exports = {
  addUser,
  getAll,
  deleteUser,
  getById,
  findUser
};

function addUser(user) {
  user.password = bcrypt.hashSync(user.password);
  return db("users").insert(user, "id");
}

function getAll() {
  return db("users");
}

function findUser(username) {
  return db("users")
    .where({ username })
    .first();
}
function getById(id) {
  console.log(id);
  return db("users")
    .where({ id })
    .first();
}

function deleteUser(id) {
  return db("users")
    .where({ id })
    .del();
}

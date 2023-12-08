const dbPool = require("../config/database");

const getAllUsers = () => {
  const SQLQuery = "SELECT * FROM users";

  return dbPool.execute(SQLQuery);
};

const createNewUser = (body) => {
  const SQLQuery = `INSERT INTO users (name, email, gender) 
                        VALUES ("${body.name}","${body.email}","${body.gender}")`;

  return dbPool.execute(SQLQuery);
};

const updateUser = (id, body) => {
  const SQLQuery = `UPDATE users SET name = "${body.name}", email = "${body.email}", address = "${body.gender}" WHERE id = ${id}`;

  return dbPool.execute(SQLQuery);
};

const deleteUser = (id) => {
  const SQLQuery = `DELETE FROM users WHERE id = ${id}`;

  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};

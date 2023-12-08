const UsersModel = require("../models/users");
const getAllUsers = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllUsers();

    res.json({
      message: "GET all users success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      serverMessage: error,
    });
  }
};

const createNewUser = async (req, res) => {
  console.log(req.body);
  const { body } = req;

  if (!body.name || !body.email || !body.gender) {
    return res.status(400).json({
      message: "Missing required field",
      data: null,
    });
  }

  try {
    await UsersModel.createNewUser(body);
    res.status(201).json({
      message: "Create new user success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      serverMessage: error,
    });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    await UsersModel.updateUser(id, body);
    res.json({
      message: "Update user success",
      data: {
        id: id,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      serverMessage: error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await UsersModel.deleteUser(id);
    res.json({
      message: "Delete user success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};

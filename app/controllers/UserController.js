const UserModel = require("../models/UserModel");

const UserController = {
  signUp: async (req, res) => {
    try {
      let result = await UserModel.findOne({ email: req.body.email });

      if (result) {
        res.status(401).json({
          status: false,
          message: "Email already exist",
        });
      } else {
        let user = req.body;
        const newUser = new UserModel(user);
        let saveResult = await newUser.save();
        res.status(200).json({
          status: true,
          result: saveResult,
        });
      }
    } catch (error) {
      res.status(500).json({
        status: false,
        message: "server error",
        error,
      });
    }
  },

  login: async (req, res) => {
    try {
      let user = await UserModel.findOne({
        email: req.body.email,
        password: req.body.password,
      });
      if (user) {
        return res.status(200).json({
          user,
          message: "Login Successfully",
        });
      } else {
        return res.status(401).json({
          message: "Error",
        });
      }
    } catch (error) {
      res.status(500).json({
        status: false,
        message: "server error",
        error,
      });
    }
  },
};

module.exports = UserController;

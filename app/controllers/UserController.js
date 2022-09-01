const UserModel = require("../models/UserModel");

const UserController = {
  signUp: async (req, res) => {
    try {
      let user = req.body;
      const newUser = new UserModel(user);

      let result = await UserModel.findOne({ email: req.body.email });

      if (result) {
        res.status(200).send({
          status: false,
          message: "Email already exist",
        });
      } else {
        let saveResult = await newUser.save();
        res.status(200).send({
          status: true,
          result: saveResult,
        });
      }
    } catch (error) {
      res.status(500).send({
        status: false,
        message: "server error",
        error,
      });
    }
  },
};

module.exports = UserController;

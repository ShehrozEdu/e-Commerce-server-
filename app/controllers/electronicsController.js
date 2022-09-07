const ElectronicModel = require("../models/electronic");
const Electronic = require("../resources/electronics.json");
//demo

const electronicController = {
  addElectronics: async (req, res) => {
    try {
      let result = await ElectronicModel.insertMany(Electronic);
      res.status(200).send({
        status: true,
        message: "Electronic added successfully",
        result,
      });
    } catch (error) {
      res.status(500).send({
        status: false,
        message: "server error",
        error,
      });
    }
  },
  getElectronics: async (req, res) => {
    try {
      let Electronic = await ElectronicModel.find();
      res.status(200).send(Electronic);
    } catch (error) {
      res.status(500).send({
        status: false,
        message: "server error",
        error,
      });
    }
  },

  getElectronicsByID: async (req, res) => {
    try {
      const { id } = req.params;
      // console.log(id);
      const Electronic = await ElectronicModel.findById(id);
      res.send(Electronic);
    } catch (error) {
      res.status(500).send({
        status: false,
        message: "server error",
        error,
      });
    }
  },
};
module.exports = electronicController;

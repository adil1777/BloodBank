const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModel");

//Create Inventory
const createInventoryController = async (req, res) => {
  try {
    const { email, inventoryType } = req.body;
    console.log(email);
    //validation
    const user = await userModel.findOne({ email });
    console.log(user);
    if (!user) {
      throw new Error("User Not Found");
    }
    if (inventoryType === "in" && user.role !== "donar") {
      throw new Error("Not a donar account");
    }
    if (inventoryType === "out" && user.role !== "hospital") {
      throw new Error("Not a hospital");
    }
    //save record
    const inventory = new inventoryModel(req.body);
    await inventory.save();
    return res.status(201).send({
      success: true,
      message: "New Blood Reocrd Added",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Errro In Create Inventory API",
      error,
    });
  }
};

//Get all blood record
const getInventoryController = async (req, res) => {
  try {
    const inventory = await inventoryModel
      .findOne({
        organisation: req.body.userId,
      })
      .populate("donar")
      .populate("hospital")
      .sort({ createdAt: -1 });
    return res.status(200).send({
      success: true,
      message: "get all records successfully",
      inventory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Get All Inventory",
      error,
    });
  }
};
module.exports = { createInventoryController, getInventoryController };

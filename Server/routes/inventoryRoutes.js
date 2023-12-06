const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalController,
  getOrganisationController,
  getOrgnaisationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} = require("../controllers/inventoryController");   

const router = express.Router();

// ADD INVENTORY || POST
router.post("/create-inventory", authMiddleware, createInventoryController);

// Get All Blood Records
router.get("/get-inventory", authMiddleware, getInventoryController);

// Get Recent Blood  Records 3
router.get("/get-recent-inventory", authMiddleware, getRecentInventoryController);

// Get All Donar Records
router.get("/get-donars", authMiddleware, getDonarsController);

// GET HOSPITAL RECORDS
router.get("/get-hospitals", authMiddleware, getHospitalController);

// GET ORGANISATION RECORDS
router.get("/get-organisations", authMiddleware, getOrganisationController);

//GET ORGANISATION  RECORDS FOR HOSpital
router.get("/get-orgnaisation-for-hospital",authMiddleware,getOrgnaisationForHospitalController);
  
//GET HOSPITAL BLOOD RECORDS
router.post("/get-inventory-hospital",authMiddleware,getInventoryHospitalController );

module.exports = router;

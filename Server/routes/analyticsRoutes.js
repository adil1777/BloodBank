const express = require ("express");
const authMiddleware = require('../middlewares/authMiddleware');
const { bloodGroupDetailsContoller } = require("../controllers/analyticsController");


const router = express.Router();


//routes 


//Get Blood Group  Data
router.get("/bloodGroups-data",authMiddleware ,bloodGroupDetailsContoller);

module.exports = router;
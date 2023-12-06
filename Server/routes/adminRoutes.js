const express =require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { getDonarListController, getHospitalListController, getOrgListController, deleteDonarController } = require("../controllers/adminController");
const adminMiddleWare = require("../middlewares/adminMiddleWare");


//Route Object
const router =express.Router();

//Routes

//Get || Donar List
router.get('/donar-list',authMiddleware,adminMiddleWare,getDonarListController);

//Get || Hospital List
router.get('/hospital-list',authMiddleware,adminMiddleWare,getHospitalListController);

//Get || Hospital List
router.get('/org-list',authMiddleware,adminMiddleWare,getOrgListController)

//=================================================

//Delete || Donar List
//Get || Hospital List
router.delete('/delete-donar/:id',authMiddleware,adminMiddleWare,deleteDonarController);

 
module.exports =router;
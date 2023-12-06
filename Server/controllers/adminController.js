const userModel = require("../models/userModel");
 

//Get Donar-List 
const getDonarListController = async(req,res) =>{
  try{
     const donarData = await userModel.find({role:"donar"})
     .sort({createdAt:-1});
     return res.status(200).send({
        success:true,
        totalCount:donarData.length,
        message:"Donar List Fetched Successfully ",
        donarData,
     })

  }catch(error){
    console.log(error);
    return res.status(500).send({
        success:true,
        message:"Error In Donar List API",
        error,
    });
  }
};

//Get Hospital-List 
const getHospitalListController = async(req,res) =>{
    try{
       const hospitalData = await userModel.find({role:"hospital"})
       .sort({createdAt:-1});
       return res.status(200).send({
          success:true,
          totalCount:hospitalData .length,
          message:"Hospital List Fetched Successfully ",
          hospitalData,
       })
  
    }catch(error){
      console.log(error);
      return res.status(500).send({
          success:true,
          message:"Error In Hospital List API",
          error,
      });
    }
  };


  //Get ORG-List 
const getOrgListController = async(req,res) =>{
    try{
       const orgData = await userModel.find({role:"organisation"})
       .sort({createdAt:-1});
       return res.status(200).send({
          success:true,
          totalCount:orgData.length,
          message:"organisation List Fetched Successfully ",
          orgData ,
       })
  
    }catch(error){
      console.log(error);
      return res.status(500).send({
          success:true,
          message:"Error In organisation List API",
          error,
      });
    }
  };

  //  ===================================================

  //Delete Donar || Delete Hospital || Delate ORG
  const deleteDonarController = async(req,res)=>{
    try{
      await userModel.findByIdAndDelete(req.params.id);
      return res.status(200).send({
        success:true,
        message:"Record Deleted Successfully",
      });
    }catch(error){
        console.log(error);
        return res.status(500).send({
            success:false,
            message:"Error while Deleting ",
            error,
        });
    }
  };

module.exports ={getDonarListController,getHospitalListController,getOrgListController,deleteDonarController};
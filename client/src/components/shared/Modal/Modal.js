import React, { useState } from "react";
import  InputTypes from "./../form/InputTypes"
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import API from "../../../services/API";
const Modal = () => {
  const [inventoryType, setInventoryType] = useState("in");
  const [bloodGroup, setBloodGroup] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [email, setEmail] = useState("");
  const{user}=useSelector((state)=>state.auth);

  //handle modal data
  const handleModalSubmit = async() => {
      try{
           if(!bloodGroup || !quantity){
            return alert("Please Provide ALl Fields");
           }
        const{data} = await API.post("/inventory/create-inventory",{
            email,
            organisation:user?._id,
            inventoryType,
            bloodGroup,
            quantity,
        });
        if(data?.success){
            alert("New Record Created");
            window.location.reload();
        }
      }catch(error){
         alert(error.response.data.message);
         console.log(error);
         window.location.reload();
      }
  };

  return (
    <>
      {/* Modal */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Manage Blood Record
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div className="d-flex mb-3">
                Blood Types:&nbsp;
                {/* Blood IN */}
                <div className="form-check ms-3">
                  <input
                    type="radio"
                    name="inRadio"
                    defaultChecked
                    value={"in"}
                    onChange={(e) => setInventoryType(e.target.value)}
                    className="form-check-input"
                  />
                  <label htmlFor="in" className="form-check-label">
                    IN
                  </label>
                </div>
                {/* Blood OUT */}
                <div className="form-check ms-3">
                  <input
                    type="radio"
                    name="inRadio"
                    value={"out"}
                    onChange={(e) => setInventoryType(e.target.value)}
                    className="form-check-input"
                  />
                  <label htmlFor="out" className="form-check-label">
                    OUT
                  </label>
                </div>
              </div>
            </div>

            {/* Select Blood Types */}
            <select
             className="form-select" 
             aria-label="Default select example"
             onChange={(e)=>setBloodGroup(e.target.value)}>
              <option defaultValue={'Open this select Blood Group'}>
                Open this select Blood Group
              </option>
              <option value={'O+'} >O+</option>
              <option value={'O-'}>O-</option>
              <option value={'AB+'}>AB+</option>
              <option value={'AB-'}>AB-</option>
              <option value={'A+'}>A+</option>
              <option value={'A-'}>A-</option>
              <option value={'B+'}>B+</option>
              <option value={'B-'}>B-</option>
            </select>
             
             {/* Email Field */}
             <InputTypes
                 labelText={'Donar Email'}
                 labelFor={'donarEmail'}
                 inputType={'Email'}
                 value={email}
                 onChange = {(e)=>setEmail(e.target.value)}
             />
             {/* Quantity field */}
              <InputTypes
                 labelText={'Quantity (ML)'}
                 labelFor={'Quantity'}
                 inputType={'Number'}
                 value={quantity}
                 onChange = {(e)=>setQuantity(e.target.value)}
             />

              <br />
              {/* Footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleModalSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

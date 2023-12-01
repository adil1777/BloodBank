import { userLogin, userRegister } from "../redux/features/auth/authAction";
import store from "../redux/store";
import { toast } from "react-toastify";

export const handleLogin = async(e, email, password, role) => {
  e.preventDefault();
  try {
    console.log({e,email,password,role});
    if (!role || !email || !password) {
      return alert("Please Provide All Field");
    }
     await store.dispatch(userLogin({role, email, password}));
  } catch (error) {
    console.log("Error during login",error);
    toast.error("An error occurred during login");
  }
};

export const handleRegister = (
  e,
  name,
  role,
  email,
  password,
  phone,
  organisationName,
  address,
  hospitalName,
  website
) => {
  e.preventDefault();
  try {
    store.dispatch(userRegister({
      name,
      role,
      email,
      password,
      phone,
      organisationName,
      address,
      hospitalName,
      website
    }));
  } catch (error) {
    console.log("Error during Register",error);
    toast.error("An error occurred during Register");
  }
};

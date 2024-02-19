import React from "react";
import { BiDonateBlood } from "react-icons/bi";
import { FaRegCircleUser } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  //Logout handler
  const handleLogout = () => {
    localStorage.clear();
    toast.success("Logout Successfully");
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-brand h1">
            {" "}
            <BiDonateBlood  color="red" /> <span className="badge bg-secondary">LifeDropHub</span>
          </div>
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-3">
              <p className="nav-link ">
                <FaRegCircleUser color="black"/> {" "}<span style={{color:"black"}}>Welcome {" "}
                {user?.name || user?.hospitalName || user?.organisationName}{" "}</span>
                &nbsp;
                <span className="badge bg-secondary">{user?.role}</span>
              </p>
            </li>

            {location.pathname === "/" ||
            location.pathname === "/donar" ||
            location.pathname === "/hospital" ? (
              <li className="nav-item mx-3">
                <Link to="/analytics" className="nav-link">
                <span className="badge bg-secondary">Analytics</span>
                </Link>
              </li>
            ) : (
              <li className="nav-item mx-3">
                <Link to="/" className="nav-link">
                <span className="badge bg-secondary">Home</span>
                </Link>
              </li>
            )}

            <li className="nav-item mx-3">
              <button className="btn btn-danger" onClick={handleLogout}>
                {" "}
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;

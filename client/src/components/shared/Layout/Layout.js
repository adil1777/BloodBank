import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <dvi className="row g-0">
        <div className="col-md-3">
          <Sidebar/>
        </div>
        <div className="col-md-9">{children}</div>
      </dvi>
    </>
  );
};

export default Layout;

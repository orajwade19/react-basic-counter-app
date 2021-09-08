import React from "react";
const Navbar = ({ numCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand" href="#">
          Navbar
          <span className="badge badge-pill bg-primary m-2">{numCounters}</span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;

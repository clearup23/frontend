import React from "react";
import { Link } from "react-router-dom";

const SelectRolePage = () => {
  return (
    <div>
      <h1>Select Role</h1>
      <div>
        <Link to="/login/admin" className="btn btn-primary mr-2">
          Admin
        </Link>
        <Link to="/login/user" className="btn btn-primary">
          User
        </Link>
      </div>
    </div>
  );
};

export default SelectRolePage;

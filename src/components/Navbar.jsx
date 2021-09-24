import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link style={{ margin: "20px" }} to="/home">
        user
      </Link>
      <Link style={{ margin: "20px" }} to="/about">
        about
      </Link>
      <Link style={{ margin: "20px" }} to="/contact">
        contact
      </Link>
    </div>
  );
}

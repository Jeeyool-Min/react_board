import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="/list">
        <span>List</span>
      </Link>
      <Link to="/new">
        <span>New</span>
      </Link>
    </>
  );
}

export default NavBar;
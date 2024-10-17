import React from "react";
import { Link } from "react-router-dom";

const NavBarItem = ({url, titulo, className, onClick}) =>{
  return(
    <Link
      className={`navItem ${className}`}
      onClick={onClick}
      to={url}
    >
      <li>{titulo}</li>
    </Link>
  )
}

export default NavBarItem
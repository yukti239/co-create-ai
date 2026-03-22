import React from "react";
import { Link } from "react-router-dom";

function Sidebar(){

return(

<div className="sidebar">

<h2 className="logo">CoCreate AI</h2>

<nav>

<Link to="/">Dashboard</Link>

<Link to="/workflows">Workflows</Link>

<Link to="/profile">Profile</Link>

</nav>

</div>

);

}

export default Sidebar;
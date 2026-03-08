import React from "react";
import { FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";

function Sidebar(){
return(

<div className="sidebar">

<h2>CoCreate AI</h2>

<div className="menu-item">
<FaHome/> Dashboard
</div>

<div className="menu-item">
<FaProjectDiagram/> Workflows
</div>

<div className="menu-item">
<FaUser/> Profile
</div>

</div>

)
}

export default Sidebar;
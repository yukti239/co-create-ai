import React, { useEffect, useState } from "react";
import API from "../services/api";
import Sidebar from "../components/Sidebar";
import WorkflowCard from "../components/WorkflowCard";
import "../styles/dashboard.css";

function Workflows({ setUser }) {

  const [workflows, setWorkflows] = useState([]);

  const load = async () => {
    try {
      const res = await API.get("/workflows");

      // latest first
      setWorkflows(res.data.reverse());

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    load();
  }, []);

  // 🔥 Logout (same as dashboard)
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div className="layout">

      {/* 🔥 PASS LOGOUT */}
      <Sidebar onLogout={handleLogout} />

      <div className="main">

        <h1>All Workflows</h1>

        <div className="workflow-grid">

          {workflows.length > 0 ? (
            workflows.map((workflow) => (
              <WorkflowCard 
                key={workflow._id} 
                workflow={workflow} 
                reload={load}
              />
            ))
          ) : (
            <p>No workflows available</p>
          )}

        </div>

      </div>

    </div>
  );
}

export default Workflows;
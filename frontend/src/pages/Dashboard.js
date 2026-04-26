import React, { useEffect, useState } from "react";
import API from "../services/api";
import Sidebar from "../components/Sidebar";
import CreateWorkflow from "../components/CreateWorkflow";
import WorkflowCard from "../components/WorkflowCard";
import WorkflowChart from "../components/WorkflowChart";
import ProgressChart from "../components/ProgressChart";
import "../styles/dashboard.css";

function Dashboard({ setUser }) {
  const [workflows, setWorkflows] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  // 🔄 LOAD DATA
  const loadWorkflows = async () => {
    try {
      const res = await API.get("/workflows");
      const data = res.data.reverse();

      setWorkflows(data);
      setFiltered(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadWorkflows();
  }, []);

  // 🔥 LOGOUT (ONLY USED IN SIDEBAR)
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  // 🔍 SEARCH (button)
  const handleSearch = () => {
    const result = workflows.filter((w) =>
      w.title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(result);
  };

  // 🔍 AUTO SEARCH (on typing)
  useEffect(() => {
    const result = workflows.filter((w) =>
      w.title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(result);
  }, [search, workflows]);

  // 📊 STATS
  let totalSteps = 0;
  let completedSteps = 0;

  workflows.forEach((w) => {
    totalSteps += w.steps.length;
    completedSteps += w.steps.filter(
      (s) => s.status === "completed"
    ).length;
  });

  const totalWorkflows = workflows.length;

  const completedWorkflows = workflows.filter(
    (w) => w.steps.every((s) => s.status === "completed")
  ).length;

  const pendingWorkflows = totalWorkflows - completedWorkflows;

  return (
    <div className="layout">
      {/* Sidebar */}
      <Sidebar onLogout={handleLogout} />

      <div className="main">
        {/* 🔥 TOP BAR */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1>Dashboard</h1>

          <div style={{ display: "flex", gap: "10px" }}>
            {/* SEARCH INPUT */}
            <input
              type="text"
              placeholder="Search workflow..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {/* SEARCH BUTTON */}
            <button onClick={handleSearch} className="search-btn">
              Search
            </button>
          </div>
        </div>

        {/* 📊 STATS */}
        <div className="stats">
          <div className="card stat">
            <h3>Total Workflows</h3>
            <p>{totalWorkflows}</p>
          </div>

          <div className="card stat">
            <h3>Completed Workflows</h3>
            <p>{completedWorkflows}</p>
          </div>

          <div className="card stat">
            <h3>Pending Workflows</h3>
            <p>{pendingWorkflows}</p>
          </div>
        </div>

        {/* 📊 CHARTS */}
        <h2>Workflow Analytics</h2>

        <div className="charts">
          <WorkflowChart completed={completedSteps} total={totalSteps} />

          <ProgressChart
            completed={completedSteps}
            remaining={totalSteps - completedSteps}
          />
        </div>

        {/* ➕ CREATE */}
        <CreateWorkflow reload={loadWorkflows} />

        {/* 📦 WORKFLOWS */}
        <h2>Workflows</h2>

        <div className="workflow-grid">
          {filtered.length > 0 ? (
            filtered.map((w) => (
              <WorkflowCard
                key={w._id}
                workflow={w}
                reload={loadWorkflows}
              />
            ))
          ) : (
            <p>No workflows found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
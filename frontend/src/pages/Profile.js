import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import API from "../services/api";
import "../styles/dashboard.css";

function Profile({ setUser }) {
  const [workflows, setWorkflows] = useState([]);
  const [image, setImage] = useState("");
  const fileInputRef = useRef(null);

  const user = JSON.parse(localStorage.getItem("user"));

  const load = async () => {
    try {
      const res = await API.get("/workflows");
      setWorkflows(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    load();
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) setImage(savedImage);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 1024 * 1024) {
      alert("Max 1MB image allowed");
      return;
    }

    const reader = new FileReader();

    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        const MAX_WIDTH = 300;
        const scale = MAX_WIDTH / img.width;

        canvas.width = MAX_WIDTH;
        canvas.height = img.height * scale;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const compressed = canvas.toDataURL("image/jpeg", 0.8);

        localStorage.setItem("profileImage", compressed);
        setImage(compressed);
      };
    };

    reader.readAsDataURL(file);
  };

  // 📊 Stats
  const total = workflows.length;
  const completed = workflows.filter((w) =>
    w.steps.every((s) => s.status === "completed")
  ).length;

  const progress = total > 0 ? (completed / total) * 100 : 0;
  const timeSpent = (total * 1.5).toFixed(1);

  return (
    <div className="layout">
      <Sidebar onLogout={handleLogout} />

      <div className="main">

        {/* 🔥 HEADER */}
        <div style={{ marginBottom: "20px" }}>
          <h1 style={{ marginBottom: "5px" }}>Profile</h1>
          <p style={{ color: "#94a3b8" }}>
            Manage your profile and track your productivity
          </p>
        </div>

        {/* 🔥 TOP SECTION */}
        <div style={{ display: "flex", gap: "25px" }}>

          {/* LEFT */}
          <div style={{ flex: 2 }}>

            <div className="card">
              <h2>User Info</h2>
              <p style={{ marginTop: "10px", color: "#cbd5e1" }}>
                {user?.email}
              </p>
            </div>

            <div className="stats" style={{ marginTop: "20px" }}>
              <div className="card stat">
                <h3>Time Spent</h3>
                <p>{timeSpent} hrs</p>
              </div>

              <div className="card stat">
                <h3>Progress</h3>

                <div style={{ marginTop: "10px" }}>
                  <div style={{ background: "#334155", height: "10px", borderRadius: "6px" }}>
                    <div
                      style={{
                        width: `${progress}%`,
                        background: "#22c55e",
                        height: "10px",
                        borderRadius: "6px"
                      }}
                    />
                  </div>

                  <p style={{ marginTop: "8px", color: "#94a3b8" }}>
                    {Math.round(progress)}% completed
                  </p>
                </div>
              </div>
            </div>

            <div className="card" style={{ marginTop: "20px" }}>
              <h2>Recent Activity</h2>

              <ul style={{ marginTop: "10px", color: "#cbd5e1" }}>
                {workflows.slice(0, 5).map((w) => (
                  <li key={w._id} style={{ marginBottom: "6px" }}>
                    {w.title}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* RIGHT */}
          <div style={{ width: "240px" }}>
            <div className="card" style={{ textAlign: "center" }}>

              <img
                src={
                  image ||
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt="profile"
                onClick={handleImageClick}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  border: "3px solid #2563eb",
                  marginBottom: "10px"
                }}
              />

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />

              <h3>{user?.email?.split("@")[0]}</h3>

            </div>
          </div>

        </div>

        {/* 🔥 BOTTOM GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            marginTop: "30px"
          }}
        >

          {/* Productivity */}
          <div className="card">
            <h2>Productivity Score</h2>

            <div style={{ marginTop: "10px" }}>
              <div style={{ background: "#334155", height: "12px", borderRadius: "6px" }}>
                <div
                  style={{
                    width: `${progress}%`,
                    background: "#38bdf8",
                    height: "12px",
                    borderRadius: "6px"
                  }}
                />
              </div>

              <p style={{ marginTop: "8px", color: "#94a3b8" }}>
                {Math.round(progress)}% productivity
              </p>
            </div>
          </div>

          {/* Weekly Activity */}
          <div className="card">
            <h2>Weekly Activity</h2>

            <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
              {[40, 60, 80, 30, 90, 70, 50].map((val, i) => (
                <div key={i}>
                  <div
                    style={{
                      height: `${val}px`,
                      width: "10px",
                      background: "#22c55e",
                      borderRadius: "4px"
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="card">
            <h2>Achievements</h2>

            <ul style={{ marginTop: "10px", color: "#cbd5e1" }}>
              <li>🏆 Created {total} workflows</li>
              <li>🔥 Active user</li>
              <li>⚡ Consistent performer</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Profile;
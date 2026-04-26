import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Workflows from "./pages/Workflows";
import Profile from "./pages/Profile";

function App() {
  const [user, setUser] = useState(null);

  // 🔥 LOAD USER FROM LOCAL STORAGE
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  // 🔐 If not logged in
  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <Routes>
      <Route path="/" element={<Dashboard setUser={setUser} />} />
      <Route path="/workflows" element={<Workflows setUser={setUser} />} />
      <Route path="/profile" element={<Profile setUser={setUser} />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
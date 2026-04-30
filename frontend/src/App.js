import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/login";
import Register from "./pages/register";
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

  return (
    <Routes>
      {!user ? (
        <>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Dashboard setUser={setUser} />} />
          <Route path="/workflows" element={<Workflows setUser={setUser} />} />
          <Route path="/profile" element={<Profile setUser={setUser} />} />
          <Route path="/login" element={<Navigate to="/" />} />
          <Route path="/register" element={<Navigate to="/" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
}

export default App;
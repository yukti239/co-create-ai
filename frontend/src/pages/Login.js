import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ GET USERS
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const normalizedEmail = email.trim().toLowerCase();
    const normalizedPassword = password.trim();

    // ✅ FIND USER
    const foundUser = users.find(
      (u) => u.email === normalizedEmail && u.password === normalizedPassword
    );

    if (foundUser) {
      // 🔥 SAVE LOGGED-IN USER
      localStorage.setItem("user", JSON.stringify(foundUser));

      // 🔥 UPDATE STATE
      setUser(foundUser);

      // 🔥 REDIRECT
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={styles.container}>
      
      {/* LEFT SIDE */}
      <div style={styles.left}>
        <h1 style={styles.logo}>Co-Create AI</h1>

        <h2 style={styles.heading}>
          Build Smarter Workflows
        </h2>

        <p style={styles.text}>
          Transform ideas into structured workflows using AI-powered
          automation, tracking, and analytics.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div style={styles.right}>
        <div style={styles.card}>
          <h2 style={styles.title}>Welcome Back</h2>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />

            <button type="submit" style={styles.button}>
              Login
            </button>
          </form>

          <p style={styles.footer}>
            Don’t have an account?{" "}
            <span onClick={() => navigate("/register")} style={styles.link}>
              Register
            </span>
          </p>

        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial",
    background: "linear-gradient(120deg, #1e3c72, #0f172a 60%)",
  },

  left: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "80px",
    color: "#fff",
  },

  logo: {
    fontSize: "32px",
    color: "#38bdf8",
    marginBottom: "20px",
  },

  heading: {
    fontSize: "28px",
    marginBottom: "15px",
  },

  text: {
    color: "#94a3b8",
    maxWidth: "420px",
    lineHeight: "1.6",
  },

  right: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "350px",
    padding: "35px",
    borderRadius: "16px",
    background: "#1e293b",
    boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
    border: "1px solid rgba(255,255,255,0.05)",
  },

  title: {
    color: "#fff",
    marginBottom: "20px",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "none",
    background: "#334155",
    color: "#fff",
  },

  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "linear-gradient(135deg, #38bdf8, #6366f1)",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  },

  footer: {
    marginTop: "15px",
    color: "#94a3b8",
  },

  link: {
    color: "#38bdf8",
    cursor: "pointer",
  },
};

export default Login;
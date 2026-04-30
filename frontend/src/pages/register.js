import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const normalizedEmail = email.trim().toLowerCase();
    const normalizedPassword = password.trim();

    const exists = users.find((u) => u.email === normalizedEmail);

    if (exists) {
      alert("User already exists");
      return;
    }

    const newUser = { email: normalizedEmail, password: normalizedPassword };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("user", JSON.stringify(newUser));

    if (setUser) {
      setUser(newUser);
    }

    alert("Registered successfully");
    navigate("/");
  };

  return (
    <div style={styles.container}>
      {/* LEFT SIDE */}
      <div style={styles.left}>
        <h1 style={styles.logo}>Co-Create AI</h1>
        <h2 style={styles.heading}>Create Your Account</h2>
        <p style={styles.text}>
          Join and start managing workflows with AI automation.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div style={styles.right}>
        <div style={styles.card}>
          <h2 style={styles.title}>Create Account</h2>

          <form onSubmit={handleRegister}>
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

            <button style={styles.button}>Register</button>
          </form>

          <p style={styles.footer}>
            Already have an account?{" "}
            <span onClick={() => navigate("/login")} style={styles.link}>
              Login
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
    background: "linear-gradient(120deg, #1e3c72, #0f172a 60%)",
    fontFamily: "Arial",
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

export default Register;
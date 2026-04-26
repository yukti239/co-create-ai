import React, { useState } from "react";

const Register = ({ setPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    // ✅ get all users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // ✅ check if already exists
    const exists = users.find((u) => u.email === email);

    if (exists) {
      alert("User already exists");
      return;
    }

    // ✅ add new user
    const newUser = { email, password };
    users.push(newUser);

    // ✅ save updated users list
    localStorage.setItem("users", JSON.stringify(users));

    // ✅ also store current logged user (optional but useful)
    localStorage.setItem("user", JSON.stringify(newUser));

    alert("Registered successfully");

    // go to login page
    setPage("login");
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
            <span onClick={() => setPage("login")} style={styles.link}>
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
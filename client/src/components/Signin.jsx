import React, { useState } from "react";
import "../css/login.css";

const Signin = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Profile, setProfile] = useState("student");
  const handleSubmit = () => {
    
  }
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2> <br />
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Profile">Profile:</label>
          <select
            name="Profile"
            id="Profile"
            // value={Profile}
            onChange={(e) => setProfile(e.target.value)}
          >
            <option value="admin">Admin</option>
            <option value="student">Student</option>
          </select>
        </div>
        <button className="btn-login" onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
};

export default Signin;

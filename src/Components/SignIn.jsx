import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    // Store token in localStorage
    localStorage.setItem(username, JSON.stringigy(username))
    // Navigate user to home page
    usenavigate ()
  };

  return (
    <div>
      <h1>Welcome to the best App!</h1>
      <div id="login-form">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <br />
      </div>
    </div>
  );
};

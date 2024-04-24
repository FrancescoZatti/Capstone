import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../redux/authSlice";
import axios from "../api/axios";
import { Navigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const token = async () => {
    await axios.get("/sanctum/csrf-cookie").then(response => {
      login();
    });
  };

 const login = async () => {
  axios.post("/login", {
  email: email,
  password: password,
}).then (response => {
  if (response.status === 200) {
    dispatch(loginSuccess(response.data.user));
    console.log("Login success:", response.data.user);
  }
}).catch (error => {
  console.error("Login error:", error);
} );} 

  const handleSubmit = async (e) => {
    e.preventDefault();
token()
    
  };

  // if (isLoggedIn) {
  //   return <Navigate to="/" />;
  // }

  return (
    <div className="PageDiv">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Email:
          <input
            type="text"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Login
        </button>
      </form>
      <p>
        Don't have an account? <a href="/registerpage">Register now!</a>
      </p>
    </div>
  );
}

export default Login;

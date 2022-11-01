import "./css/login.css";
import loginimg from "./images/login.jpg";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { loginRoute } from "../utils/APIRoutes";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { password, username } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem("chat-app-user", JSON.stringify(data.user));
        navigate("/");
      }
    }
  };
  const handleValidation = () => {
    const { password, username } = values;
    if (password === "") {
      toast.error("Email and Password is required", toastOptions);
      return false;
    } else if (username.length === "") {
      toast.error("Email and Password is required", toastOptions);
      return false;
    }
    return true;
  };
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <div className="container">
      <div className="box-container">
        <form className="login-form" onSubmit={(event) => handleSubmit(event)}>
          <p>
            <b>Login</b>
            <br />
            <small>
              Welcome to SChat Application. Please login to continue to SChat
            </small>
          </p>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            onChange={(e) => handleChange(e)}
            min="3"
          ></input>
          <br />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            onChange={(e) => handleChange(e)}
            placeholder="Enter Password"
          />
          <br />
          <a href="co">Forgot Password?</a>

          <br />
          <hr></hr>
          <input type="submit" value="Login" />
          <br />
          <br />
          <div className="fot">
            <small className="si">
              Don't have an account? {"\u00A0"} <a href="register">Sign up</a>{" "}
            </small>
          </div>
        </form>
        <ToastContainer />
      </div>
      <div className="box-container2">
        <img src={loginimg} alt="login" />
      </div>
    </div>
  );
}
export default Login;

import register from "./images/register.jpeg";
import "./css/login.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { loginRoute } from "../utils/APIRoutes";
function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const toastOptions = {
    position: "top-left",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      console.log("in validation", loginRoute);
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
        navigate("/home");
      }
    }
  };
  const handleValidation = () => {
    const { password, username } = values;
    if (password === "") {
      toast.error("Email and Password is required", toastOptions);
      return false;
    } else if (username.length === "") {
      toast.error("Email & Password is required", toastOptions);
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
        <div>
          <form
            className="login-form"
            onSubmit={(event) => handleSubmit(event)}
          >
            <p>
              <b>Create Account</b>
              <br />
              <small>
                Welcome to SChat Application. Register Now to avail SChat
              </small>
            </p>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => handleChange(e)}
              min = "3"
            />

            <br />
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => handleChange(e)}
            />

            <br />
            <br />
            <hr></hr>
            <input type="checkbox" />
            <span> {"\u00A0"}I've read and accept the Terms & Conditions</span>
            <br />
            <br />
            <input type="submit" value="create my account" />
          </form>

          <span>
            Don't have an account ? <Link to="/register">Register</Link>{" "}
          </span>
          <ToastContainer />
        </div>
      </div>
      <div className="box-container2">
        <img src={register} alt="login" />
      </div>
    </div>
  );
}
export default Login;

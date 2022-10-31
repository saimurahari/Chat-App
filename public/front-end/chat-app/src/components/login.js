import "./css/login.css";
import loginimg from "./images/login.jpg";
import { useState } from "react";

function Login() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) =>{
    const name = event.target.name;
    const value = event.target.value;

    setInputs(values=>({...values,[name]:value}))
  }
  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <div className="container">
      <div className="box-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <p>
            <b>Login</b>
            <br />
            <small>
              Welcome to SChat Application. Please login to continue to SChat
            </small>
          </p>
          <label>E-mail:</label>
          <input
            type="email"
            name="username"
            value={inputs.username || ""}
            placeholder="Enter Email/username"
            onChange={handleChange}
          ></input>
          <br />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={inputs.password ||""}
            onChange={handleChange}
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
      </div>
      <div className="box-container2">
        <img src={loginimg} alt="login" />
      </div>
    </div>
  );
}
export default Login;

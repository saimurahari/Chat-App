import register from "./images/register.jpeg";
import './css/login.css';
import { useState,useEffect } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { registerRoute } from "../utils/APIRoutes";
function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:"",
  });
  const toastOptions = {
    position:"top-left",
    autoClose:8000,
    pauseOnHover:true,
    draggable:true,
    theme:"light",
  }

  const handleSubmit = async(event)=>{
    event.preventDefault();
    if(handleValidation()){
      console.log("in validation",registerRoute);
      const { password,username,email } = values;

      const {data} = await axios.post(registerRoute,
       { username,
        email,
        password,
      });
      if(data.status===false){
        toast.error(data.msg,toastOptions);
      }
      if(data.status===true){
        localStorage.setItem('chat-app-user',JSON.stringify(data.user));
        navigate('/setAvatar');
      }
      
      }
  };
  const handleValidation = ()=>{
    const { password,confirmPassword,username,email } = values;
    if(password!==confirmPassword){
      toast.error("Password and Confirm Password should be same",
      toastOptions
      
      ); 
      return false;
    }else if (username.length<3){
      toast.error("Username should be greater than 3 characters",
      toastOptions
      ); 
      return false;
    }
    else if (password.length<6){
      toast.error("Password should be greater than 6 characters",
      toastOptions
      ); 
      return false;
    }
    else if(email===""){
      toast.error("Email is required",toastOptions);
      return false;
    }
    return true;
  }
  const handleChange = (event)=>{
    setValues({...values,[event.target.name]:event.target.value});

  }

  return (
    <div className="container">
      <div className="box-container">
        <div >
          
          <form className="login-form" onSubmit={(event)=>handleSubmit(event)}>
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
            onChange={e=>handleChange(e)}
            />
            <br />
            <label>E-mail:</label>
            <input 
            type="email" 
            name="email" 
            placeholder="Email"
            onChange={e=>handleChange(e)}
            />
            <br />
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={e=>handleChange(e)}
            />
            <br />
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={e=>handleChange(e)}
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
          

          <span>Already have an account ? <Link to="/login">Login</Link> </span>
          <ToastContainer />
        </div>
      </div>
      <div className="box-container2">
        <img src={register} alt="login" />
      </div>
      
    </div>
     
  );
}
export default Signup;
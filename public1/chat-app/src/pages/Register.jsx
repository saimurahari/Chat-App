import React,{ useState,useEffect} from "react";
import styled from "styled-components";
import {ToastContainer,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { registerRoute } from "../utils/APIRoutes";
export default function Register() {
    const[values,setValues] = useState({
        username:"",
        email:"",
        password:"",
        confirmpassword:""
    });
    const toastOptions={
        position:"bottom-right",
            autoClose:8000,
            pauseOnHover:true,
            draggable:true,
            theme:"dark",
    }
  const handleSubmit = async(event) => {
    event.preventDefault();
    if(handleValidation()){
        console.log("hello",registerRoute);
        const {password,confirmpassword,username,email}=values;
        const {data} = await axios.post(registerRoute,{
            username,
            email,
            password,
        });
    }
  };
  const handleValidation = ()=>{
    const {password,confirmpassword,username,email}=values;
    if(password!==confirmpassword){
        
        toast.error("password and confirm password should be same.",
            toastOptions
        );
        return false;
    }else if(username.length<3){
        toast.error("username shoudl be greater than 3 characters",toastOptions);
        return false;
    }
    else if(password.length<6){
        toast.error("Password should be greater than 6 characters",toastOptions);
        return false;
    }else if(email === ""){
        toast.error("email should not be empty",toastOptions);
        return false;
    }
    return true;
  }
  const handleChange = (event) => {
    setValues({...values,[event.target.name]:event.target.value});
    
  };
  return (
    <>
      Register
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <h1>Chat-App</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmpassword"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Create User</button>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}
const FormContainer = styled.div``;

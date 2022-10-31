import register from "./images/register.jpeg";
import { useState } from 'react';

function Signup() {
  const[inputs, setInputs] = useState({});
  const handleChange=(event)=>{
    const name = event.target.name;
    const value=  event.target.value;
    setInputs(values=>({...values,[name]:value}))
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(inputs);
  }

  
  return (
    <div className="container">
      <div className="box-container">
        <div >
          
          <form className="login-form" onSubmit={handleSubmit}>
          <p>
            <b>Create Account</b>
            <br />
            <small>
              Welcome to SChat Application. Register Now to avail SChat
            </small>
          </p>
            <label>Full Name:</label>
            <input 
            type="text" 
            name="fname" 
            placeholder="Full Name" 
            value={inputs.fname || ""}
            onChange={handleChange}
            required />
            <br />
            <label>E-mail:</label>
            <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={inputs.email || ""}
            onChange={handleChange}
            required 

            />
            <br />
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={inputs.password || ""}
              onChange={handleChange}
              required
            />
            <br />
            <label>Mobile:</label>
            <input
              type="text"
              name="mobile"
              pattern="[0-9]{5}-[0-9]{5}"
              placeholder="12345-67890"
              value={inputs.mobile || ""}
              onChange={handleChange}
              
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
        </div>
      </div>
      <div className="box-container2">
        <img src={register} alt="login" />
      </div>
    </div>
  );
}
export default Signup;

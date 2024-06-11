import React, { useState } from 'react';
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../storeToken/auth";
import { MdWavingHand } from "react-icons/md";
import 'react-toastify/dist/ReactToastify.css';
import './style.css'


export const Login = () => {
  const { storeTokenInLS } = useAuth();
  const navigate = useNavigate();
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: ""
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("loginInput data : ", loginInput);

      const url = "http://localhost:5000/api/auth/login"
      const response = await axios.post(url, loginInput);
      console.log("response data : ", response);

      if (response.status === 200) {
        const responseData = await response.data;


        toast.success("Login Successful");
        setLoginInput({ email: "", password: "" });

        console.log("after login: ", responseData);
        console.log("after login: ", responseData.token);

        //function created in the custom hook to store the jwt token in local storage

        storeTokenInLS(responseData.token);
        navigate("/")
        console.log(responseData);
      } else {
        alert("Invalid Credentials")
        console.log("error inside response ");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setLoginInput({ ...loginInput, [name]: value });
  }
  return (
    <div className="box">
      <div className="welcome">
        <h1>WELCOME BACK <MdWavingHand /></h1>
        Back for more? Let's dive back into the world of endless shopping possibilities!
      </div>
      <div className='form'>
        <h1>Login</h1>
        <div className='input-field'>
          <label htmlFor='email'>Email</label>
          <input className='input' type="email" placeholder='email' autoComplete='off'
            name='email' id='email' onChange={handleInput} value={loginInput.email} />
        </div>
        <div className='input-field'>
          <label htmlFor='password'>Password</label>
          <input className='input' type="password" placeholder='password' autoComplete='off'
            name='password' id='password' onChange={handleInput} value={loginInput.password} />
        </div>
        <div className='btn-container'>
          <button className='bttn' type='Submit' onClick={handleSubmit}>LOGIN</button>
        </div>
        <div>
          <Link className='link' to='/Register'>New User? SignUp Here</Link>
        </div>
        <ToastContainer />
      </div>
    </div>
  )
};
export default Login;

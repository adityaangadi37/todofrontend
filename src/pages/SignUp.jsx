import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
function Signup(){
  let navigate = useNavigate();

  // for form logic

  let [form, setForm] = useState(
    {
      name:"",
      email:"",
      password:""
    }
  );
  function Change(e){
    setForm(
      {
      ...form,
      [e.target.name]:e.target.value
    }
  )
  }

  // form logic
  async function submit(e) {
    e.preventDefault();
    await axios.post("https://todobackend-ozp0.onrender.com/users",form);
    navigate('/login')
  }
      return(
        <div className="SignUp-page">
            <form className="SignUp-Card" onSubmit={submit}>
              <h2>Create Account</h2>
              <p className="SignUp-Sub">Join and start organizing your tasks</p>

                <input
              className="SignUp-input"
              type="text"
              name="name"
              placeholder="name"
              required
              value={form.name}
              onChange={Change}
               />


              <input
              className="SignUp-input"
              type="email"
              name="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={Change}
               />

               <input
                   className="SignUp-input"
              
              type="password"
              name="password"
              placeholder="password"
              required
              value={form.password}
              onChange={Change}
               />
               <button type="submit" className="SignUp-btn">Register</button>
            </form>
        </div>
      )
}

export default Signup;
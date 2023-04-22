import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "../styles/medium/LoginPage.css";

const SignUpPage = () => {
  const [creds, setCreds] = useState({ email: "", password: "" });
  const navigate = useNavigate()

  const handleSumit = async (e) => {
    e.preventDefault();
   try{const responce = await fetch("http://localhost:5000/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: creds.email, password: creds.password }),
    }).then(navigate('/'))
  }
  catch(error){
    console.log(error)
  }
  };

  const onchange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="login-box">
        <form onSubmit={handleSumit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={creds.email}
            onChange={onchange}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={creds.password}
            onChange={onchange}
          />
          <button type="submit">Sign Up</button>
        </form>
        <h4>
          if already a user,then <Link to="/LoginPage">Login</Link>
        </h4>
      </div>
    </>
  );
};

export default SignUpPage;

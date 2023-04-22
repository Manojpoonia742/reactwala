import React from "react";
import { Link } from "react-router-dom";
import "../styles/medium/LoginPage.css";

const LoginPage = () => {
  return (
      <>
      <div className="login-box">
        <form action="/" method="post">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
          <button type="submit">Login</button>
        </form>
        <h4>if not a user yet,then <Link to='/SignUpPage'>Sign Up</Link></h4>
      </div>
    </>
  )
}

export default LoginPage

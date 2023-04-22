import React from "react";
import { Link } from "react-router-dom";
import "../styles/medium/Headbar.css";

const Home = () => {
  return (
    <>
      <div className="header">
        <h1>Loxia</h1>
        <button type="submit"><Link to='/LoginPage'>Login</Link></button>
      </div>
      <hr />
    </>
  );
};

export default Home;

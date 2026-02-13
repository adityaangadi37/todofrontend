import React from "react";
// import Navbar from "../src/components/Navbar";
import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from "../components/Navbar";

function Home(){
    return(
        <div className="home-page">
           <Navbar/>
           <div className="home-center">
                <h1 className="home-title">Modern Tools App</h1>
                <p className="home-subtitle">Class Fast Productive</p>
                <div className="home-cta">
                </div>
                <Link to= '/signup' className="home-cta-link home-primary" >Get Started</Link>
                <Link to= '/login' className="home-cta-link home-secondary">Sign in</Link>

           </div>
        </div>
    )
}

export default Home;
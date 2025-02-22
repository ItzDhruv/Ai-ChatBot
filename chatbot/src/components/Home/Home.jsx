import React, { useEffect } from "react";
import { Link , useNavigate } from "react-router-dom";
import "./Home.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi"
import LearnMore from "./LearnMore";
import { assets } from "../../assets/gemini-clone-assets/assets/assets";

const Home = () => {
  
  const { isConnected, address } = useAccount(); // Get connection status and wallet address
  const navigate = useNavigate();

  // Redirect to "/chat" if the wallet is connected
  useEffect(() => {
    if (isConnected) {
      navigate("/chat"); 
    }
  }, [isConnected, navigate]);
  return (
    <div id="main-component">
    <nav id="navbar">
      <div id="logo">DhulAI</div>
      <div id="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div id="auth-buttons">
        {isConnected ? (
          <p id="wallet-address">
            {address.slice(0, 6)}...{address.slice(-4)}
          </p>
        ) : (
          <ConnectButton />
        )}
      </div>
    </nav>
  
    <div id="hero-section">
      <div id="hero-content">
        <h1>Your Personal AI chatBot.</h1>
        <p>
        Experience the future of conversations with an intelligent AI chatbot that understands, learns, and interacts like never before.
        </p>
        <p>
         Dhula + Ai =  DhulAI
        </p>
        <div id="cta-buttons">
          <button id="join-now" onClick={() => window.open("https://www.linkedin.com/in/dhruv-dobariya/", "_blank")}>Follow Me</button>
          <button id="learn-more" onClick={() => navigate("/learnmore")}>Learn More</button>
        </div>
      </div>
      <div id="hero-image">
        <img src={assets.user_icon} alt="Img" />
      </div>
    </div>
  </div>
  
  );
};
export default Home;

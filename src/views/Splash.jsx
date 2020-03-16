import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import KeyFeatures from "../components/KeyFeatures";
import "../styles/splash.css";
import "../styles/css library/wickedcss.min.css";

const Splash = () => {
  // const {currentUser} = useContext(UserContext)
  const {isLoading,  isLoggedIn } = useAuth();

  if(isLoading) return <div className="flex-center-column loading"><img className="spinner loading-img" src="/images/loading.gif" alt="spinner" /></div>
  if(isLoggedIn) return <Redirect to="/dashboard" />

  return (
    <div className="splash-page flex-center-column">
      <div className="splash-header-wrapper">
        <div className="title-wrapper flex-center-column">
          <img
            className="splash-logo floater"
            src="/images/logo.png"
            alt="logo"
          />
          <img
            className="splash-detail"
            src="/images/splash_page/++.png"
            alt="logo"
          />
        </div>
        <div className="btn-wrapper flex-center-column">
          <Link to="/register">
            <button className="btn-splash shadow-btns btn-reg">Register</button>
          </Link>
          <Link to="/login">
            <button className="btn-splash shadow-btns btn-login">Login</button>
          </Link>
          <KeyFeatures />
        </div>
      </div>
    </div>
  );
};

export default Splash;

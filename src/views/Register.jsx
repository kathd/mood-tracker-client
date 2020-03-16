import React from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import Signup from "../components/form/Signup";
import AuthHeader from "../components/AuthHeader";

const Register = () => {

  const {isLoading,  isLoggedIn } = useAuth();

  if(isLoading) return <div className="flex-center-column loading"><img className="spinner loading-img" src="/images/loading.gif" alt="spinner" /></div>
  if(isLoggedIn) return <Redirect to="/dashboard" />

  return (
    <div className="form-page">
      <AuthHeader />
      <div className="form-wrapper">
        <h1 className="title">Register</h1>
        <Signup />
      </div>
    </div>
  );
};

export default Register;

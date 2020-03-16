import React from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import Signin from "../components/form/Signin";
import AuthHeader from "../components/AuthHeader";

const Login = () => {

  const {isLoading,  isLoggedIn } = useAuth();

  if(isLoading) return <div className="flex-center-column loading"><img className="spinner loading-img" src="/images/loading.gif" alt="spinner"/></div>
  if(isLoggedIn) return <Redirect to="/dashboard" />

  return (
    <div className="form-page">
      <AuthHeader />
      <div className="form-wrapper">
        <h1 className="title">Login</h1>
        <Signin />
      </div>
    </div>
  );
};

export default Login;

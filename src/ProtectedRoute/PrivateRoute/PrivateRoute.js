import React from "react";
import CircularProgress from '@mui/joy/CircularProgress';
import { Navigate, Route } from "react-router-dom";


import useAuth from "../../hooks/useAuth";




const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="d-flex mx-auto w-75 my-5 justify-content-center align-items-center container">
        <div>
        <CircularProgress
          color="primary"
          determinate={false}
          size="md"
          variant="outlined"
        />
        </div>
        <div>
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }
  return (
   
          user.email ? (
          children
        ) : (
          <Navigate to="/"/>
        )
      
   
  )
};

export default PrivateRoute;

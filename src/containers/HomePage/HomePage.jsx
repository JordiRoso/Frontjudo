import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";


export default function HomePage  ()  {

   

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Judo Results</h1>
      <div className="d-flex justify-content-center">
        <NavLink to="/login" className="btn btn-primary mx-2">
          Login
        </NavLink>
        <NavLink to="/register" className="btn btn-secondary mx-2">
          Register
        </NavLink>
      </div>
    </div>
  );
  
};



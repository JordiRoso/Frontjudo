import React from 'react';
// import { NavLink, useNavigate } from "react-router-dom";

export default function HomePage  ()  {

    // const navigate = useNavigate();

return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Judo Results</h1>
      <div className="d-flex justify-content-center">
        <a href="/register" className="btn btn-primary mx-2">
          Register
        </a>
        <a href="/login" className="btn btn-secondary mx-2">
          Login
        </a>
      </div>
    </div>
  );
};



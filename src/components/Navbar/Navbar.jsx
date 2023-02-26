import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.scss";
// import logo from "../../assets/react.svg";
import TokenStorageService from "../../_services/TokenStorageService";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../containers/features/login/authSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    TokenStorageService.logOut();
    dispatch(logout());
    navigate("/");
  };

//   const goToAdmin = () => {
//     navigate("/createcompes");
//   };
  const goToCreateCompes = () => {
    navigate("/createcompes");
  };const goToOtrafuncion = () => {
   navigate("/admin");
 };
  const goToCreateResults = () => {
   navigate("/create");
 };
  const goToListaResultados = () => {
   navigate("/results");
 };

  const handleEnterProfile = () => {
    navigate("/user");
  };

  const handleShowNavbar = () => {
    if (isLoggedIn) {
      return (
        <>
          {/* <li className="nav-item">
            <span
              onClick={handleEnterProfile}
              className="nav-link navbar-username"
            >
              Usuario:
              {user.name}
            </span>
          </li> */}
          
          <li className="nav-item">
            <span onClick={handleLogout} className="nav-link navbar-logout">
              Logout
            </span>
          </li>
          <li className="nav-item">
            <span
              onClick={handleEnterProfile}
              className="nav-link navbar-logout"
            >
            Usuario:
              {user.name}
            </span>
          </li>
          <div className="navbar-spacer"></div>
          <li className="nav-item">
              <span
                onClick={goToListaResultados}
                className="nav-link navbar-logout "
              >
          Resultados
              </span>
            </li>
          {/* {user.role == 'admin' ? (
            console.log(user.message),
            <li className="nav-item">
              <span
                onClick={goToCreateCompes}
                className="nav-link navbar-logout"
              >
                CreateCompe
              </span>
            </li> */}
            {user.role == 'admin' ? (
                <React.Fragment>
        <li className="nav-item">
          <span
            onClick={goToCreateCompes}
            className="nav-link navbar-logout"
          >
            Crear Resultados
          </span>
        </li>
        
        </React.Fragment>
      ) : user.role == 'superadmin' ? (
         <React.Fragment>
         <li className="nav-item">
           <span
             onClick={goToCreateResults}
             className="nav-link navbar-logout"
           >
             Crear Torneo
           </span>
         </li>
         <li className="nav-item">
           <span
             onClick={goToOtrafuncion }
             className="nav-link navbar-logout"
           >
             Lista de Usuarios
           </span>
         </li>
         
       </React.Fragment>
             
             
            
          ) : (
            ""
          )}
          
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item">
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/register" className="nav-link">
              Register
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink to="/create" className="nav-link">
             CreateCompes
            </NavLink>
          </li> */}
          
          {/* <li className="nav-item">
            <NavLink to="/createcompes" className="nav-link" end>
              CreateCompes
            </NavLink>
         </li> */}
        </>
      );
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark s-6">
        <div className="container-fluid">
          <a className="navbar-brand" >
            JudoResults
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <NavLink to="/results" className="nav-link">
                  JudoList
                </NavLink>
              </li> */}
              {handleShowNavbar()}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}


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
          <li className="nav-item">
            <span
              onClick={handleEnterProfile}
              className="nav-link navbar-username"
            >
              Pagina personal:
              {user.name}
            </span>
          </li>
          <li className="nav-item">
              <span
                onClick={goToListaResultados}
                className="nav-link navbar-logout"
              >
            Lista de Resultados
              </span>
            </li>
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
          {user.role == 'admin' ? (
            console.log(user.message),
            <li className="nav-item">
              <span
                onClick={goToCreateCompes}
                className="nav-link navbar-logout"
              >
                CreateCompe
              </span>
            </li>
            
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
          </li><li className="nav-item">
            <NavLink to="/create" className="nav-link">
             CreateCompes
            </NavLink>
          </li>
          
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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fs-6">
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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

// import React from "react";
// import { NavLink } from "react-router-dom";
// import "./Navbar.scss";
// import logo from "../../assets/react.svg";

// export default function Navbar() {
//    let activeClassName = "active-link";

//    return (
//       <div>
//          {/* <nav>
//             <ul>
//                <li>
//                   <NavLink
//                      to="/character"
//                      className={({ isActive }) =>
//                         isActive ? activeClassName : undefined
//                      }
//                   >
//                      Characters
//                   </NavLink>
//                   <NavLink
//                      to="/about"
//                      className={({ isActive }) =>
//                         isActive ? activeClassName : undefined
//                      }
//                   >
//                      About
//                   </NavLink>
//                </li>
//             </ul>
//          </nav> */}

//          <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light">
//             <div className="container text-light">
//                <a className="navbar-brand" href="/">
//                   {/* <img
//                      className="logo"
//                      src={logo}
//                      alt="Rick Morty"
//                      width="30"
//                      height="30"
//                   /> */}
//                   <span>JUDO RESULTS</span>
//                </a>
//                <button
//                   className="navbar-toggler"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#navbarSupportedContent"
//                   aria-controls="navbarSupportedContent"
//                   aria-expanded="false"
//                   aria-label="Toggle navigation"
//                >
//                   <span className="navbar-toggler-icon"></span>
//                </button>
//                <div
//                   className="collapse navbar-collapse"
//                   id="navbarSupportedContent"
//                >
//                   <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                      <li className="nav-item">
//                         <NavLink to="/result" className="nav-link" end>
//                            JudoList
//                         </NavLink>
//                      </li>
//                      <li className="nav-item">
//                         <NavLink to="/create" className="nav-link" end>
//                            CreateRes
//                         </NavLink>
//                      </li>
//                      <li className="nav-item">
//                         <NavLink to="/createcompes" className="nav-link" end>
//                           CreateCompes
//                         </NavLink>
//                      </li>
//                      <li className="nav-item">
//                         <NavLink to="/register" className="nav-link" end>
//                           Register
//                         </NavLink>
//                      </li>
//                      <li className="nav-item">
//                         <NavLink to="/login" className="nav-link" end>
//                          Login
//                         </NavLink>
//                      </li>

//                      <li className="nav-item dropdown">
//                         <a
//                            className="nav-link dropdown-toggle"
//                            href="#"
//                            id="navbarDropdown"
//                            role="button"
//                            data-bs-toggle="dropdown"
//                            aria-expanded="false"
//                         >
//                            Dropdown
//                         </a>
//                         <ul
//                            className="dropdown-menu"
//                            aria-labelledby="navbarDropdown"
//                         >
//                            <li>
//                               <a className="dropdown-item" href="#">
//                                  Action
//                               </a>
//                            </li>
//                            <li>
//                               <a className="dropdown-item" href="#">
//                                  Another action
//                               </a>
//                            </li>
//                            <li>
//                               <hr className="dropdown-divider" />
//                            </li>
//                            <li>
//                               <a className="dropdown-item" href="#">
//                                  Something else here
//                               </a>
//                            </li>
//                         </ul>
//                      </li>
//                      <li className="nav-item">
//                         <NavLink to="/about" className="nav-link">
//                            About
//                         </NavLink>
//                      </li>
//                   </ul>
//                   <form className="d-flex">
//                      <input
//                         className="form-control me-2"
//                         type="search"
//                         placeholder="Search"
//                         aria-label="Search"
//                      />
//                      <button className="btn btn-outline-success" type="submit">
//                         Search
//                      </button>
//                   </form>
//                </div>
//             </div>
//          </nav>
//       </div>
//    );
// }

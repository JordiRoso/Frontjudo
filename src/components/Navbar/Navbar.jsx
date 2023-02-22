import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../assets/react.svg";

export default function Navbar() {
   let activeClassName = "active-link";

   return (
      <div>
         {/* <nav>
            <ul>
               <li>
                  <NavLink
                     to="/character"
                     className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                     }
                  >
                     Characters
                  </NavLink>
                  <NavLink
                     to="/about"
                     className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                     }
                  >
                     About
                  </NavLink>
               </li>
            </ul>
         </nav> */}

         <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light">
            <div className="container text-light">
               <a className="navbar-brand" href="/">
                  {/* <img
                     className="logo"
                     src={logo}
                     alt="Rick Morty"
                     width="30"
                     height="30"
                  /> */}
                  <span>JUDO RESULTS</span>
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
               <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
               >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <NavLink to="/result" className="nav-link" end>
                           JudoList
                        </NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink to="/create" className="nav-link" end>
                           CreateRes
                        </NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink to="/createcompes" className="nav-link" end>
                          CreateCompes
                        </NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink to="/register" className="nav-link" end>
                          Register
                        </NavLink>
                     </li>
                     <li className="nav-item">
                     <NavLink to="/search" className="nav-link" end>
                          SearchForm
                        </NavLink>
                     </li>
                     <li className="nav-item dropdown">
                        <a
                           className="nav-link dropdown-toggle"
                           href="#"
                           id="navbarDropdown"
                           role="button"
                           data-bs-toggle="dropdown"
                           aria-expanded="false"
                        >
                           Dropdown
                        </a>
                        <ul
                           className="dropdown-menu"
                           aria-labelledby="navbarDropdown"
                        >
                           <li>
                              <a className="dropdown-item" href="#">
                                 Action
                              </a>
                           </li>
                           <li>
                              <a className="dropdown-item" href="#">
                                 Another action
                              </a>
                           </li>
                           <li>
                              <hr className="dropdown-divider" />
                           </li>
                           <li>
                              <a className="dropdown-item" href="#">
                                 Something else here
                              </a>
                           </li>
                        </ul>
                     </li>
                     <li className="nav-item">
                        <NavLink to="/about" className="nav-link">
                           About
                        </NavLink>
                     </li>
                  </ul>
                  <form className="d-flex">
                     <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                     />
                     <button className="btn btn-outline-success" type="submit">
                        Search
                     </button>
                  </form>
               </div>
            </div>
         </nav>
      </div>
   );
}

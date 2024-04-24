import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import axios from "../api/axios";
import { useLocation } from "react-router-dom";

export default function Navbar_component() {
  const handleLogout = async () => {
    try {
      await token();
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const token = async () => {
    await axios.get("/sanctum/csrf-cookie");
  };

  const logout = async () => {
    try {
      const response = await axios.post("/logout", {});
      if (response.status === 200) {
        console.log("Logout success:", response.data.user);
        dispatch(logout());
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener("click", closeMenu);

    return () => {
      window.removeEventListener("click", closeMenu);
    };
  }, []);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isAdmin = useSelector((state) =>
    state.auth.user ? state.auth.user.isAdmin : false
  );
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <Navbar className="navbar navbar-expand-lg py-2">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="brand d-flex align-items-center gap-2">
          <Navbar.Brand as={Link} to="/" className="logo"></Navbar.Brand>
          <div className="brand-name">
            <a className="navbar-brand" href="#">
              <span>N</span>onn<span>O</span>rto
            </a>
          </div>
        </div>
        <Nav className="d-flex menu">
          <Menu
            right
            isOpen={isOpen}
            onStateChange={({ isOpen }) => setIsOpen(isOpen)}
            customBurgerIcon={
              <div className="menu">
                <a className="d-lg-none menu" onClick={toggleMenu}>
                  <i class="bi bi-list"></i>
                </a>
              </div>
            }
          >
            <Nav.Link className="nav_link" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="nav_link" href="#">
              Il tuo orto
            </Nav.Link>
            <Nav.Link className="nav_link" href="#">
              Scambi
            </Nav.Link>
            <Nav.Link className="nav_link" as={Link} to="/chisiamo">
              Chi siamo
            </Nav.Link>
            <div
              style={{
                height: "1px",
                width: "80%",
                background: "#036d19",
                margin: "auto",
              }}
            ></div>
            <div className="profile_button d-block"> </div>
            <Nav.Link className="nav_link" href="#">
              Login
            </Nav.Link>
            <Nav.Link className="nav_link" href="#">
              Modifica profilo
            </Nav.Link>
            <Nav.Link className="nav_link" href="#">
              Elimina profilo
            </Nav.Link>
            <div
              style={{
                height: "1.5rem",
                width: "80%",
                background: "transparent",
                borderBottom: "1px solid #e8e9eb50",
              }}
            ></div>
            <button className="nav_link" onClick={handleLogout}>
              Esci
            </button>
          </Menu>
          <div className="menu d-flex align-items-center gap-3 d-none d-lg-flex">
            <Nav.Link className="nav_link" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="nav_link" href="#">
              Il tuo orto
            </Nav.Link>
            <Nav.Link className="nav_link" href="#">
              Scambi
            </Nav.Link>
            <Nav.Link className="nav_link" as={Link} to="/chisiamo">
              Chi siamo
            </Nav.Link>
            <div class="dropdown-center">
              <button
                class="profile_button bg-transparent border-0 dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></button>
              <ul class="dropdown-menu dropdown-menu.hide position-absolute top-100 end-0 mt-2">
                <li>
                  <a class="dropdown-item" as={Link} href="/login">
                    Login
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Modifica profilo
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Elimina profilo
                  </a>
                </li>
                <li>
                  <button class="dropdown-item" onClick={handleLogout}>
                    Esci
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </Nav>
      </div>
    </Navbar>
  );
}

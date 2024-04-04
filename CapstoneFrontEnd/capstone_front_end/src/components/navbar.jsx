import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import Dropdown from "react-bootstrap/Dropdown";

const NavbarItem = ({ href, children }) => (
  <div className="nav-link" href={href}>
    {children}
  </div>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener("click", closeMenu);

    return () => {
      window.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <div className="navbar navbar-expand-lg py-2">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="brand d-flex align-items-center gap-2">
          <div className="logo"></div>
          <div className="brand-name">
            <a className="navbar-brand" href="#">
              <span>N</span>onn<span>O</span>rto
            </a>
          </div>
        </div>
        <div className="d-flex menu">
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
            <NavbarItem href="#">Home</NavbarItem>
            <NavbarItem href="#">Il tuo orto</NavbarItem>
            <NavbarItem href="#">Scambi</NavbarItem>
            <NavbarItem href="#">Chi siamo</NavbarItem>
            <div className="profile_button"></div>
          </Menu>
          <div className="menu d-flex align-items-center gap-3 d-none d-lg-flex">
            <NavbarItem href="#">Home</NavbarItem>
            <NavbarItem href="#">Il tuo orto</NavbarItem>
            <NavbarItem href="#">Scambi</NavbarItem>
            <NavbarItem href="#">Chi siamo</NavbarItem>
            <div class="dropdown-center">
              <button
                class="profile_button bg-transparent border-0 dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              </button>
              <ul class="dropdown-menu dropdown-menu.hide position-absolute top-100 end-0 mt-2">
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
                  <a class="dropdown-item" href="#">
                    Esci
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

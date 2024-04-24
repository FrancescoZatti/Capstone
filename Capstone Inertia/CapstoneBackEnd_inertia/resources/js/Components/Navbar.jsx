import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link, usePage } from "@inertiajs/react";
import { Navbar, Nav } from "react-bootstrap";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";

export default function Navbar_component() {
    const [isOpen, setIsOpen] = useState(false);
    const { props } = usePage(); // Accesso alle props

    const closeMenu = () => setIsOpen(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        window.addEventListener("click", closeMenu);

        return () => {
            window.removeEventListener("click", closeMenu);
        };
    }, []);

    return (
        <Navbar className="navbar navbar-expand-lg py-2">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="brand d-flex align-items-center gap-2">
                    <Navbar.Brand
                        as={Link}
                        href="/"
                        className="logo"
                    ></Navbar.Brand>
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
                                <a
                                    className="d-lg-none menu"
                                    onClick={toggleMenu}
                                >
                                    <i className="bi bi-list"></i>
                                </a>
                            </div>
                        }
                    >
                        <Nav.Link className="nav_link" href="/">
                            Home
                        </Nav.Link>
                        <Nav.Link className="nav_link" href="/tuoorto">
                            Il tuo orto
                        </Nav.Link>
                        <Nav.Link className="nav_link" href="#">
                            Scambi
                        </Nav.Link>
                        <Nav.Link className="nav_link" href="/chisiamo">
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
                        {/* Condizione per verificare se l'utente è loggato */}
                        {props.auth.user ? (
                            <>
                                <p>{props.auth.user.name}</p>
                                <Nav.Link className="nav_link" href="/profile">
                                    Modifica Profilo
                                </Nav.Link>
                                <ResponsiveNavLink
                                    method="post"
                                    href={route("logout")}
                                    as="button"
                                >
                                    Log Out
                                </ResponsiveNavLink>
                            </>
                        ) : (
                            <Nav.Link className="nav_link" href="/login">
                                Login
                            </Nav.Link>
                        )}
                    </Menu>
                    <div className="menu d-flex align-items-center gap-3 d-none d-lg-flex">
                        <Nav.Link className="nav_link" href="/">
                            Home
                        </Nav.Link>
                        {/* Condizione per renderizzare solo se l'utente è loggato */}
                        {
                            props.auth.user ? (
                                <>
                                    <Nav.Link className="nav_link" href="/tuoorto">
                                        Il tuo orto
                                    </Nav.Link>
                                    <Nav.Link className="nav_link" href="#">
                                        Scambi
                                    </Nav.Link>
                                </>
                            ) : null /* Se l'utente non è loggato, non renderizza nulla */
                        }
                        <Nav.Link className="nav_link" href="/chisiamo">
                            Chi siamo
                        </Nav.Link>
                        <div className="dropdown-center">
                            <button
                                className="profile_button bg-transparent border-0 dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            ></button>
                            <ul
                                className="dropdown-menu dropdown-menu.hide position-absolute top-100 end-0 mt-2"
                                style={{ right: "50 !important" }}
                            >
                                <li>
                                    {/* Utilizzo di una condizione ternaria per renderizzare il nome dell'utente o il link di login */}
                                    {props.auth.user ? (
                                        <a className="dropdown-item" href="#">{props.auth.user.name}</a>
                                    ) : (
                                        <Nav.Link
                                            className="dropdown-item"
                                            href="/login"
                                        >
                                            Login
                                        </Nav.Link>
                                    )}
                                </li>
                                {
                                    props.auth.user ? (
                                        <>
                                            <Nav.Link
                                                className="dropdown-item"
                                                href="/profile"
                                                as="a"
                                            >
                                                Modifica profilo
                                            </Nav.Link>
                                            <li>
                                                <ResponsiveNavLink
                                                    className="dropdown-item"
                                                    method="post"
                                                    href={route("logout")}
                                                    as="a"
                                                >
                                                    Log Out
                                                </ResponsiveNavLink>
                                            </li>
                                        </>
                                    ) : null /* Se l'utente non è loggato, non renderizza nulla */
                                }
                            </ul>
                        </div>
                    </div>
                </Nav>
            </div>
        </Navbar>
    );
}

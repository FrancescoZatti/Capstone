// import { useState } from 'react';
// import ApplicationLogo from '@/Components/ApplicationLogo';
// import Dropdown from '@/Components/Dropdown';
// import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
// import { Link } from '@inertiajs/react';
import React, { useState, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "@inertiajs/react";
import { Navbar, Nav } from "react-bootstrap";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

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
        // <div className="min-h-screen bg-gray-100">
        //     <nav className="bg-white border-b border-gray-100">
        //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        //             <div className="flex justify-between h-16">
        //                 <div className="flex">
        //                     <div className="shrink-0 flex items-center">
        //                         <Link href="/">
        //                             <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
        //                         </Link>
        //                     </div>

        //                     <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
        //                         <NavLink href={route('dashboard')} active={route().current('dashboard')}>
        //                             Dashboard
        //                         </NavLink>
        //                     </div>
        //                 </div>

        //                 <div className="hidden sm:flex sm:items-center sm:ms-6">
        //                     <div className="ms-3 relative">
        //                         <Dropdown>
        //                             <Dropdown.Trigger>
        //                                 <span className="inline-flex rounded-md">
        //                                     <button
        //                                         type="button"
        //                                         className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
        //                                     >
        //                                         {user.name}

        //                                         <svg
        //                                             className="ms-2 -me-0.5 h-4 w-4"
        //                                             xmlns="http://www.w3.org/2000/svg"
        //                                             viewBox="0 0 20 20"
        //                                             fill="currentColor"
        //                                         >
        //                                             <path
        //                                                 fillRule="evenodd"
        //                                                 d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        //                                                 clipRule="evenodd"
        //                                             />
        //                                         </svg>
        //                                     </button>
        //                                 </span>
        //                             </Dropdown.Trigger>

        //                             <Dropdown.Content>
        //                                 <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
        //                                 <Dropdown.Link href={route('logout')} method="post" as="button">
        //                                     Log Out
        //                                 </Dropdown.Link>
        //                             </Dropdown.Content>
        //                         </Dropdown>
        //                     </div>
        //                 </div>

        //                 <div className="-me-2 flex items-center sm:hidden">
        //                     <button
        //                         onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
        //                         className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
        //                     >
        //                         <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
        //                             <path
        //                                 className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
        //                                 strokeLinecap="round"
        //                                 strokeLinejoin="round"
        //                                 strokeWidth="2"
        //                                 d="M4 6h16M4 12h16M4 18h16"
        //                             />
        //                             <path
        //                                 className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
        //                                 strokeLinecap="round"
        //                                 strokeLinejoin="round"
        //                                 strokeWidth="2"
        //                                 d="M6 18L18 6M6 6l12 12"
        //                             />
        //                         </svg>
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
        //             <div className="pt-2 pb-3 space-y-1">
        //                 <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
        //                     Dashboard
        //                 </ResponsiveNavLink>
        //             </div>

        //             <div className="pt-4 pb-1 border-t border-gray-200">
        //                 <div className="px-4">
        //                     <div className="font-medium text-base text-gray-800">{user.name}</div>
        //                     <div className="font-medium text-sm text-gray-500">{user.email}</div>
        //                 </div>

        //                 <div className="mt-3 space-y-1">
        //                     <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
        //                     <ResponsiveNavLink method="post" href={route('logout')} as="button">
        //                         Log Out
        //                     </ResponsiveNavLink>
        //                 </div>
        //             </div>
        //         </div>
        //     </nav>

        //     {header && (
        //         <header className="bg-white shadow">
        //             <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
        //         </header>
        //     )}

        //     <main>{children}</main>
        // </div>
        <>
            <Navbar className="navbar navbar-expand-lg py-2">
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="brand d-flex align-items-center gap-2">
                        <Navbar.Brand
                            as={Link}
                            to="/"
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
                            <Nav.Link
                                className="nav_link"
                                as={Link}
                                to="/chisiamo"
                            >
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
                            <Nav.Link className="nav_link" href="/profile">
                                Modifica profilo
                            </Nav.Link>
                            {/* <Nav.Link className="nav_link" href="#">
              Elimina profilo
            </Nav.Link> */}
                            <div
                                style={{
                                    height: "1.5rem",
                                    width: "80%",
                                    background: "transparent",
                                    borderBottom: "1px solid #e8e9eb50",
                                }}
                            ></div>
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
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
                            <Nav.Link
                                className="nav_link"
                                as={Link}
                                to="/chisiamo"
                            >
                                Chi siamo
                            </Nav.Link>
                            <div class="dropdown-center">
                                <button
                                    class="profile_button bg-transparent border-0 dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                ></button>
                                <ul
                                    class="dropdown-menu dropdown-menu.hide position-absolute top-100 end-0 mt-2"
                                    style={{ right: "50 !important" }}
                                >
                                    <li>
                                        <p>Ciao, {user.name}</p>
                                    </li>
                                    <li>
                                        <a
                                            class="dropdown-item"
                                            href="/profile"
                                        >
                                            Modifica profilo
                                        </a>
                                    </li>
                                    {/* <li>
                  <a class="dropdown-item" href="#">
                    Elimina profilo
                  </a>
                </li> */}
                                    <li>
                                        <ResponsiveNavLink
                                            method="post"
                                            href={route("logout")}
                                            as="button"
                                        >
                                            Log Out
                                        </ResponsiveNavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Nav>
                </div>
            </Navbar>
            <main>{children}</main>
        </>
    );
}

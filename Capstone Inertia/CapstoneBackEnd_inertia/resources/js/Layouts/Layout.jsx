import React from "react";
import Navbar_component from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const  Layout = ({ children }) => { // c:/laragon/www/Capstone/Capstone Inertia/CapstoneBackEnd_inertia/resources/js/Layouts/Layout.jsx() {
    return (
        <>
            <Navbar_component />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Layout

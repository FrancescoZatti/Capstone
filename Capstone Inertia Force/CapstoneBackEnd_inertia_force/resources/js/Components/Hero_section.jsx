import React from "react";
import heroImage from "../assets/img/hero_section.png";
import { Link } from "@inertiajs/react";

export default function Hero() {
    return (
        <div className="herosection">
            <img src={heroImage} alt="hero section" className="heroimg" />
            <div className="overlay">
                <div className="hero_group d-flex flex-column justify-content-center align-items-center">
                    <p className="herotext">
                        <span>Coltiva</span> nel tuo orto, <br />
                        <span>scambia</span> i tuoi prodotti!
                    </p>
                    <Link href="/tuoorto" className="hero_button ">
                        <div className="d-flex align-items-center justify-content-center">
                            <a href="#">Inizia ora!</a>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

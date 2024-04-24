import React from "react";
import Workinprogress_img from "../assets/img/workinprogress.png";
import { Link } from "@inertiajs/react";

export default function Error404() {
    return (
        <div className="container">
            <div
                className="row p-5 d-flex flex-column justify-content-center align-items-center"
                style={{ minHeight: "60vh" }}
            >
                <div className="col-3 d-flex justify-content-center align-items-end">
                    <img src={Workinprogress_img} alt="workinprogress" />
                </div>
                <div className="col-7 d-flex justify-content-start align-items-start">
                    <div
                        className="p-3 text-center mt-3"
                        style={{
                            backgroundColor: "#e8e9eb",
                            borderRadius: "2rem",
                            border: "2px solid #f06543",
                            boxShadow: "-4px 4px 10px rgba(28, 50, 78, 0.25)",
                        }}
                    >
                        <p className="fs-3">
                            Stiamo lavorando per rendere operativa questa
                            pagina,
                            <Link href="/" className="linkgeneric">
                                {" "}
                                intanto esplora il resto di NonnOrto
                            </Link>
                            !
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

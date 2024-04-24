import React from "react";
import Hero from "./Hero_section";
import Navbar_component from "./Navbar";
import Footer from "./Footer";
import Layout from "@/Layouts/Layout";
import homeImg1 from "../assets/img/home_img1.png";
import homeImg2 from "../assets/img/home_img2.png";
import { Link } from "@inertiajs/react";

export default function HomeComponent() {


  return (
    <>
    {/* <Navbar_component /> */}
      <Hero />
      <div className="home_section mt-4">
        <div className="home_article">
          <div className="home_title text-center">
            <h2>
              Perchè usare <span>NonnOrto</span>?
            </h2>
          </div>
          <div className="home_content container d-flex justify-content-between align-items-top gap-3">
            <div className="home_text">
              <p className="fs-5">
                <span>NonnOrto</span> è un modo semplice e veloce per gestire il
                tuo orto!
              </p>
              <p className="fs-5">
                Con NonnOrto puoi creare e{" "}
                <span>monitorare il tuo orto da PC</span>, aggiornando le
                quantità e le colture con un click. Condividi e{" "}
                <span>scambia prodotti</span> con altri utenti per più varietà e
                nuove amicizie.{" "}
                <p className="sm-d-none fs-5" style={{ display: "inline" }}>
                  Trova e scambia prodotti con utenti vicini e tieni aggiornato
                  il tuo orto su NonnOrto!
                </p>
              </p>

              <div className="d-flex home_button_div justify-content-between mt-5">
                <div></div>
                <Link
                  href="/chisiamo"
                  className="home_button me-5 text-decoration-none"
                >
                  Scopri di più!
                </Link>
              </div>
            </div>
            <div className="home_img_div d-flex align-items-center flex-column">
              <img src={homeImg1} alt="immagine 1 home" className="home_img" />
              <div className="home_plus mt-3">
              <Link
                href="/chisiamo"
                  className="home_button me-5 text-decoration-none"
                >
                  Scopri di più!
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: "1rem" }}></div>
        <div className="home_article">
          <div className="home_title2">
            <h2>
              Apri il tuo orto, è <span>facile</span>!
            </h2>
          </div>
          <div className="home_content2 container d-flex justify-content-between align-items-top">
            <div className="home_img_div2 d-flex align-items-center flex-column">
              <img src={homeImg2} alt="immagine 1 home" className="home_img2" />
              <div className="home_plus mt-3">
                <div className="home_button me-5" style={{ width: "100%" }}>
                  <a href="#">Inizia ora!</a>
                </div>
              </div>
            </div>
            <div className="home_text">
              <p className="fs-5 ms-3">
                <span>Inizia a coltivare</span>, tieni traccia dei tuoi ortaggi!
              </p>
              <p className="fs-5 ms-3">
                Immagina di avere <span>un orto organizzato al meglio</span>, con ogni
                dettaglio sotto controllo: <span>registrati ora</span> e goditi la gioia di
                tenere traccia del tuo lavoro in modo facile e <span>ovunque tu voglia</span>: ti basta solo la tua connessione ad internet! <br />
                <span>Entra oggi</span> nel tuo NonnOrto!
              </p>
              <div className="d-flex home_button_div justify-content-between mt-5">
                <div className="home_button ms-5">
                  <a href="#">Inizia ora!</a>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

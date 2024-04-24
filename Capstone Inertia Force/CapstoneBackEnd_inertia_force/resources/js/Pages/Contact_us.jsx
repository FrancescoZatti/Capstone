import React, { useState } from "react";
import Contactus_img from "../assets/img/contactus_img.png";
import { Link } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";

export default function ContactUs() {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nome:", nome);
    console.log("Cognome:", cognome);
    console.log("Email:", email);
    console.log("Messaggio:", message);
    setNome("");
    setCognome("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
    <Layout>
    <div className="contactus container mt-5 d-flex flex-column justify-content-center align-items-center">
      <div className="title_contatti mb-4 pb-1">
        <h2 className="text-uppercase">Contattaci</h2>
      </div>
      <div className="contactform-div d-flex justify-content-between align-items-center w-100">
        <div style={{ width: "40%" }} className="contactimg_lg">
          <img
            src={Contactus_img}
            alt="contactus_img"
            style={{
              width: "100%",
              borderBottom: "0.5rem solid #036d19",
              borderRadius: "0 0 100% 100%",
            }}
          />
        </div>
        <div
          className="contact_form_div container px-4"
          style={{ width: "55%" }}
        >
          <div className="row justify-content-center">
            <div className="">
              <form onSubmit={handleSubmit}>
                <div className="form-group d-flex justify-content-between gap-3">
                  <div className="w-100">
                    <label htmlFor="nome">Nome</label>
                    <input
                      type="text"
                      className="form-control ortaggiodetails"
                      id="nome"
                      placeholder="Inserisci il tuo nome"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      required
                    />
                  </div>
                  <div className="w-100">
                    <label htmlFor="cognome">Cognome</label>
                    <input
                      type="text"
                      className="form-control ortaggiodetails"
                      id="cognome"
                      placeholder="Inserisci il tuo cognome"
                      value={cognome}
                      onChange={(e) => setCognome(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control ortaggiodetails"
                    id="email"
                    placeholder="Inserisci la tua email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="message">Messaggio</label>
                  <textarea
                    className="form-control ortaggiodetails"
                    id="message"
                    rows="5"
                    placeholder="Inserisci il tuo messaggio"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="d-flex justify-content-between mb-4">
                  <div></div>
                  <div className="w-50">
                    <button type="submit" className="contactus_button">
                      Invia
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div style={{ width: "80%" }} className="contactimg_sm">
          <img
            src={Contactus_img}
            alt="contactus_img"
            style={{
              width: "100%",
              borderBottom: "0.5rem solid #036d19",
              borderRadius: "0 0 100% 100%",
            }}
          />
        </div>
      </div>
    </div>
    </Layout>
    </>
  );
}

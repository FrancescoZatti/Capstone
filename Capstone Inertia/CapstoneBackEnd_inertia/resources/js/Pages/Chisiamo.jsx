import React from "react";
import Layout from "@/Layouts/Layout";
import Chisiamo_img1 from "../assets/img/chisiamo_img1.png";
import Chisiamo_img2 from "../assets/img/chisiamo_img2.png";
import { Link } from "@inertiajs/react";

export default function Chisiamo() {
  return (
    <>
    <Layout>
    <div className="home_section mt-5">
      <div className="home_article">
        <div className="home_title text-center">
          <h2>
            Come nasce <span>NonnOrto</span>?
          </h2>
        </div>
        <div className="home_content container d-flex justify-content-between align-items-top gap-3">
          <div className="home_text w-100">
            <p className="fs-5">
              Quando l'idea di <span>NonnOrto</span> ha preso forma, tutto è
              iniziato con un ricordo radicato nel passato:{" "}
              <span>l'orto del mio nonno</span>.
            </p>
            <p className="fs-5">
              Ogni volta che mi avvicinavo a quel luogo di pace e tranquillità,
              ero avvolto da un senso di meraviglia e ispirazione. Era un luogo
              dove le <span>sementi</span> si trasformavano in{" "}
              <span>piantine</span> e le cure amorevoli producevano frutti
              deliziosi. Ma più di tutto, era il cuore pulsante di uno{" "}
              <span>scambio costante</span>. Il nonno condivideva le sue
              conoscenze e i suoi raccolti con i vicini, creando un legame
              speciale con la comunità. Quell'orto non era solo un luogo di
              crescita, ma un'esperienza condivisa di gioia e connessione.
            </p>
            <p className="fs-5">
              Volevo portare quella stessa magia nel mondo moderno, dove la
              tecnologia potesse unire le persone e celebrare la bellezza della
              natura. Così è nato <span>NonnOrto</span>, un luogo virtuale dove
              l'amore per la terra e lo spirito di condivisione si incontrano.{" "}
            </p>
            <p className="fs-5">
              E ora, attraverso <span>NonnOrto</span>, ogni ortolano può vivere
              l'emozione di coltivare il proprio giardino, mantenendo viva
              l'eredità dei nostri nonni e portando avanti la tradizione dello
              scambio con i vicini. È un omaggio al passato, un regalo per il
              presente e una promessa per il futuro.
            </p>
            <div className="mt-4">
              <img
                className="chisiamo_img w-100"
                src={Chisiamo_img1}
                alt="immagine 1"
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "1rem" }}></div>
      <div className="home_article">
        <div className="home_title2">
          <h2>
            I nostri <span>obbiettivi</span>
          </h2>
        </div>
        <div className="home_content2 container d-flex justify-content-between align-items-top gap-3">
          <div className="home_text w-100">
            <p className="fs-5">
              Se hai un orto, sicuramente sai quanto sia speciale lo scambio con
              i vicini: <span>sementi</span>, <span>piantine</span> e
              soprattutto i <span>frutti del tuo lavoro</span> vengono condivisi
              con gioia. Ecco perché <span>NonnOrto</span> vuole promuovere
              questa pratica meravigliosa!
            </p>{" "}
            <p className="fs-5">
              {" "}
              Lo <span>scambio di consigli</span> e <span>ortaggi</span> è il
              cuore pulsante di questa esperienza. Qui potrai{" "}
              <span>tenere traccia</span> di ogni singola pianta, di ogni seme
              seminato e di ogni <span>raccolto</span>. Sarà come scrivere la
              storia del tuo orto, pagina dopo pagina, con tutte le persone
              speciali che fanno parte di questa avventura. Immagina di avere un{" "}
              <span>diario verde</span> che cresce insieme alle tue piante, dove
              ogni nuovo frutto è un capitolo pieno di sorprese e gratitudine.{" "}
            </p>{" "}
            <p className="fs-5">
              Entra a far parte della nostra comunità e vivi con noi{" "}
              <span>
                l'emozione di condividere il meglio del tuo orto con il mondo
              </span>
              !
            </p>
            <div className="mt-4">
              <img
                className="chisiamo_img2 w-100"
                src={Chisiamo_img2}
                alt="immagine 1"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="chisiamo_contactus text-center mt-5 pt-4">
        <div className="text-center">
          <h2 className="fs-3">
            Hai bisogno di più <span>informazioni</span>?
          </h2>
        </div>
        <div>
          <Link href="/contatti" className="chisiamo_button text-decoration-none">
            Contattaci!
          </Link>
        </div>
      </div>
    </div>
  </Layout>
    </>
  );
}

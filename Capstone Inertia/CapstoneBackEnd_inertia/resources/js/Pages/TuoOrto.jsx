import React, { useState } from "react";
import Layout from "@/Layouts/Layout";
import OrtaggiCreate from "@/Components/OrtaggiCreate";
import OrtoStartImg from "@/assets/img/ortopage_start.png";
import OrtoMiddleImg from "@/assets/img/ortopage_content.png";
import OrtoEndImg from "@/assets/img/ortopage_end.png";
import LogoEXAMPLE from "@/assets/img/logo_barra.png";
import OrtaggioGenericImg from "@/assets/img/ortaggio_generic.png";
import OrtaggioGenericImgHover from "@/assets/img/ortaggio_generic_hover.png";
import Modal from "react-bootstrap/Modal";
import { Inertia } from "@inertiajs/inertia"; // Importa Inertia da @inertia/inertia

export default function TuoOrto({ ortaggi, auth }) {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [selectedOrtaggio, setSelectedOrtaggio] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => setShowModal(false);
    const handleModalOpen = (ortaggio) => {
        setSelectedOrtaggio(ortaggio);
        setShowModal(true);
    };

    const filterOrtaggiByUserId = () => {
        if (!auth || !auth.user || !auth.user.id) {
            return [];
        }

        const userId = auth.user.id;
        const ortaggiFiltered = ortaggi.filter(
            (ortaggio) => ortaggio.user_id === userId
        );

        return ortaggiFiltered;
    };

    const ortaggiFiltered = filterOrtaggiByUserId();

    const deleteOrtaggio = (ortaggio) => {
        if (!window.confirm('Vuoi eliminare questa prenotazione?')) {
            return;
        }

        // Utilizza Inertia.delete per effettuare la richiesta di eliminazione
        Inertia.delete(route("ortaggi.destroy", ortaggio), {
            onSuccess: () => {
                // Ricarica la pagina dopo l'eliminazione
                Inertia.reload();
            },
            onError: (error) => {
                console.error("Errore durante l'eliminazione:", error);
            },
        });
    };

    return (
        <Layout>
            <div className="px-2">
                <div className="container ortocontainer text-center my-3">
                    <div className="ortostart">
                        <div className="ortostarttext">
                            <h1>
                                L'orto di <span>{auth.user.name}</span>
                            </h1>
                        </div>
                        <img src={OrtoStartImg} alt="mioorto" />
                    </div>
                    <div
                        className="ortocontent row gap-3 justify-content-center align-items-center text-center"
                        style={{
                            backgroundImage: `url(${OrtoMiddleImg})`,
                            backgroundSize: "100% auto",
                            backgroundRepeat: "repeat-y",
                        }}
                    >
                        {ortaggiFiltered.map((ortaggio) => (
                            <div
                                key={ortaggio.id}
                                className="ortaggiocard card col-lg-5 col-md-5 col-sm-12 py-3 px-4"
                                onMouseEnter={() => setHoveredCard(ortaggio.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="col-12">
                                        <div className="row align-items-center">
                                            <div className="col-6 d-flex align-items-center">
                                                <div className="col-4">
                                                    <img
                                                        src={LogoEXAMPLE}
                                                        alt="logo"
                                                    />
                                                </div>
                                                <h5 className="card-title col-8 text-start ps-2">
                                                    {ortaggio.name}
                                                </h5>
                                            </div>
                                            <div className="col-6 d-flex justify-content-center">
                                                <div
                                                    className="ortaggioinfobtn d-flex justify-content-center align-items-center"
                                                    onClick={() =>
                                                        handleModalOpen(
                                                            ortaggio
                                                        )
                                                    }
                                                >
                                                    <span className="my-1">
                                                        Info
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-2 align-items-center">
                                            <div className="col-7 text-center">
                                                <img
                                                    src={
                                                        hoveredCard ===
                                                        ortaggio.id
                                                            ? OrtaggioGenericImgHover
                                                            : OrtaggioGenericImg
                                                    }
                                                    alt="grow fine"
                                                />
                                            </div>
                                            <div className="col-4 d-flex flex-column h-100">
                                                <div className="d-flex flex-column align-items-center">
                                                    <div className="ortomodificabtn d-flex justify-content-center align-items-center">
                                                        <span className="my-1">
                                                            Modifica
                                                        </span>
                                                    </div>
                                                    <div className="ortoeliminabtn d-flex justify-content-center align-items-center mt-2" onClick={() => deleteOrtaggio(ortaggio)}>
                                                        <span className="my-1">
                                                            Elimina
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="ortoend">
                        <div className="ortoendadd">
                            <OrtaggiCreate />
                        </div>
                        <img src={OrtoEndImg} alt="mioorto2" />
                    </div>
                </div>
            </div>

            {/* Modal */}
            <Modal
                className="modalcontainer"
                show={showModal}
                onHide={handleModalClose}
                centered
            >
                <div className="modalcard">
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {" "}
                            <span>D</span>ettagli <span>O</span>rtaggio
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {selectedOrtaggio && (
                            <>
                                <div className="ortaggiodetails">
                                    <p className="ortaggiodetails-title">Scopri di più su <span>{selectedOrtaggio.name}</span>:</p>
                                    <p className="ortaggiodetails-description">{selectedOrtaggio.description}</p>
                                </div>
                                <div className="ortaggiodetails mt-2">
                                    <p className="ortaggiodetails-title">Quantità: <span>{selectedOrtaggio.quantity}</span> </p>
                                </div>
                            </>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <button
                            className="hero_button mt-3"
                            onClick={handleModalClose}
                        >
                            Chiudi
                        </button>
                    </Modal.Footer>
                </div>
            </Modal>
        </Layout>
    );
}

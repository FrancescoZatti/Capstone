import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useForm } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";

export default function OrtaggiCreate() {
    const [showModal, setShowModal] = useState(false);
    const { data, setData, post } = useForm({
        name: "",
        description: "",
        quantity: 1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("ortaggi.store"));
        setShowModal(false); // Chiudi il modale dopo l'invio del form
    };

    // Lista preimpostata di verdure
    const verdure = ["Pomodoro", "Cipolla", "Carota", "Zucchina", "Melanzana", "Zucca"];

    return (
        <div>
            {/* <Button className='border-none ortobutton p-0' style={{ padding: '0 !important' }} onClick={() => setShowModal(true)}>
                <span>Aggiungi Ortaggio</span>
            </Button> */}

            <div className="ortobutton" onClick={() => setShowModal(true)}>
                <span>Aggiungi Ortaggio</span>
            </div>

            <Modal
                className="modalcontainer"
                show={showModal}
                onHide={() => setShowModal(false)}
                centered
            >
                <div className="modalcard">
                    <Modal.Header closeButton>
                        <Modal.Title>Crea Ortaggio</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit}>
                            <div className="row px-3 py-2 gap-3">
                                <label
                                    className="col-2 d-flex justify-content-start"
                                    htmlFor="name"
                                >
                                    <p>Nome:</p>
                                </label>
                                <select
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    onChange={handleChange}
                                    className="col ortaggiodetails"
                                >
                                    <option value="">
                                        Seleziona una verdura
                                    </option>
                                    {verdure.map((verdura) => (
                                        <option className="optionlist" key={verdura} value={verdura}>
                                            {verdura}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="row px-3 py-2 gap-3">
                                <label
                                    className="col-2 d-flex justify-content-start"
                                    htmlFor="description"
                                >
                                    Descrizione:
                                </label>
                                <input
                                    type="text"
                                    id="description"
                                    name="description"
                                    value={data.description}
                                    onChange={handleChange}
                                    className="col ortaggiodetails"
                                    style={{ height: "5rem" }}
                                />
                            </div>
                            <div className="row px-3 py-2 gap-3">
                                <label
                                    className="col-2 d-flex justify-content-start"
                                    htmlFor="quantity"
                                >
                                    Quantità:{" "}
                                </label>
                                <input
                                    type="number"
                                    id="quantity"
                                    name="quantity"
                                    value={data.quantity}
                                    onChange={handleChange}
                                    min={1}
                                    className="col-2 ortaggiodetails text-right"
                                />
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer className="border-0">
                        <div className="row w-50 gap-3">
                            <Button
                                className="hero_button col-5 border-none"
                                onClick={() => setShowModal(false)}
                            >
                                Chiudi
                            </Button>
                            <Button
                                className="modalsavebutton col-5"
                                type="submit"
                                onClick={handleSubmit}
                            >
                                Salva
                            </Button>
                        </div>
                    </Modal.Footer>
                </div>
            </Modal>
        </div>
    );
}

import { Row, Col } from "react-bootstrap";
import { Link } from "@inertiajs/react";
import Logo_barra from "../assets/img/logo_barra.png";

function Footer() {
  return (
    <footer className="footer mt-5 d-flex flex-column">
      <div>
        <Row className="text-center py-5 px-5 w-100 gap-4">
          <div className="col-lg-2 col-sm-1 text-start"></div>

          <div className="col-1 text-start">
            <img src={Logo_barra} alt="logo barra" style={{ width: "100%" }} />
          </div>
          <Col className="col-2 text-start" style={{ borderRight: "1px solid #e8e9eb50" }}>
            <ul className="list-unstyled">
              <li>
                <Link href="/" style={{ color: "#fff" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/chisiamo" style={{ color: "#fff" }}>
                  Chi siamo
                </Link>
              </li>
              <li>
                <Link href="/contatti" style={{ color: "#fff" }}>
                  Contatti
                </Link>
              </li>
            </ul>
          </Col>
          <Col className="col-lg-3 col-sm-2 text-start">
            <p>Via delle Rose, 123</p>
            <p>Città, CAP 12345</p>
          </Col>
          <Col className="col-3 text-start">
            <p>info@example.com</p>
            <p>123-456-789</p>
          </Col>
        </Row>
      </div>
      <Row className="justify-content-md-center text-center pb-3 w-100">
        <Col md={6}>
          <p>
            © {new Date().getFullYear()} Il tuo sito. Tutti i diritti riservati.
          </p>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;

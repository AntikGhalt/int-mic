import { useState } from 'react';
import { Navbar, Container, Row, Col, Button, Offcanvas } from 'react-bootstrap';
import { List } from 'react-bootstrap-icons';
import Link from 'next/link';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className={styles.container}>
      <Navbar bg="custom-sap-red" variant="dark" className={`${styles.navbarCustom}`}>
        <Container fluid>
          <Row className="w-100 align-items-center justify-content-between">
            <Col xs={2} className="d-flex">
              <Button
                variant="link"
                onClick={toggleSidebar}
                className={`p-0 text-white ${styles.hoverRed}`}
              >
                <List size={28} />
              </Button>
            </Col>

            <Col xs={8} className="d-flex justify-content-center">
              <Navbar.Brand
                href="/"
                className={`text-white m-0 p-0 ${styles.brandText}`}
              >
                Interactive Microeconomics
              </Navbar.Brand>
            </Col>

            <Col xs={2} className="d-flex justify-content-end">
              <img
                src="/logo_sapienza.png"
                alt="Logo"
                className={styles.logo}
              />
            </Col>
          </Row>
        </Container>
      </Navbar>

      <Offcanvas
        show={sidebarOpen}
        onHide={toggleSidebar}
        placement="start"
        className={styles.sidebar}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="px-3 py-4">
          <div className="mb-4">
            <h2 className="fs-5 text-uppercase text-muted fw-semibold mb-3 pb-1 border-bottom">
              Microeconomia
            </h2>
            <ul className="list-unstyled">
              <li className="text-muted fst-italic">(empty)</li>
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="fs-5 text-uppercase text-muted fw-semibold mb-3 pb-1 border-bottom">
              Microeconomia Avanzata
            </h2>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  href="/modelli/edgeworth"
                  className={`d-block rounded p-2 ${styles.hoverRed}`}
                >
                  Edgeworth
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/modelli/robinson"
                  className={`d-block rounded p-2 ${styles.hoverRed}`}
                >
                  Robinson Economy
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/modelli/twoconsumers_oneproducer"
                  className={`d-block rounded p-2 ${styles.hoverRed}`}
                >
                  Two consumer, One producer
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="fs-5 text-uppercase text-muted fw-semibold mb-3 pb-1 border-bottom">
              Esercizi
            </h3>
            <ul className="list-unstyled">
              {[...Array(6)].map((_, i) => (
                <li key={i} className="mb-2">
                  <Link
                    href={`/modelli/esempio_0${i + 1}_ump`}
                    className={`d-block rounded p-2 ${styles.hoverRed}`}
                  >
                    {[
                      "UMP ES1 Cobb-Douglas",
                      "UMP ES2 Corn. Solution",
                      "UMP ES3 Perf. Compl.",
                      "EMP ES1 Cobb-Douglas",
                      "UMP CES",
                      "EMP CES",
                    ][i]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <main className={styles.content}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
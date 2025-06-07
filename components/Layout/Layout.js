// components/Layout/Layout.js

import { useState, useEffect } from 'react';
import {
  Navbar,
  Container,
  Row,
  Col,
  Button,
  Offcanvas,
  Collapse
} from 'react-bootstrap';
import { List, ChevronDown, ChevronRight } from 'react-bootstrap-icons';
import Link from 'next/link';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [microExercisesOpen, setMicroExercisesOpen] = useState(false);
  const [statExercisesOpen, setStatExercisesOpen] = useState(false);

  // ← Initialize to the current scroll position (avoids a jump on first scroll)
  const [prevScrollPos, setPrevScrollPos] = useState(
    typeof window !== 'undefined' ? window.pageYOffset : 0
  );
  const [visible, setVisible] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp   = currentScrollPos < prevScrollPos;
      const isAtTop         = currentScrollPos <= 0;

      // Show navbar when scrolling up or at the very top
      setVisible(isScrollingUp || isAtTop);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div className={styles.container}>
      <Navbar
        className={[
          styles.navbarCustom,
          styles.navbarFixed,
          visible ? styles.navbarVisible : styles.navbarHidden,
          'shadow-sm'
        ].join(' ')}
      >
        <Container fluid>
          <Row className="w-100 align-items-center justify-content-between">
            <Col xs={2} className="d-flex">
              <Button
                variant="link"
                onClick={toggleSidebar}
                className={`p-0 text-white ${styles.menuButton}`}
              >
                <List size={28} />
              </Button>
            </Col>

            <Col xs={8} className="d-flex justify-content-center">
              <Navbar.Brand
                href="/"
                className={`text-white m-0 p-0 ${styles.brandText}`}
              >
                Interactive Learning with Desmos
              </Navbar.Brand>
            </Col>

            <Col xs={2} className="d-flex justify-content-end">
              <img
                src="/logo_interactivelearning.png"
                alt="logo"
                className={styles.logo}
              />
            </Col>
          </Row>
        </Container>
      </Navbar>

      {/* spacer to prevent content jump */}
      <div className={styles.navbarSpacer} />

      <Offcanvas
        show={sidebarOpen}
        onHide={toggleSidebar}
        placement="start"
        className={styles.sidebar}
      >
        <Offcanvas.Header closeButton className={styles.sidebarHeader}>
          <Offcanvas.Title className={styles.sidebarTitle}>
            <Link href="/" onClick={() => setSidebarOpen(false)}>
              Home
            </Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="px-0 py-4">
          {/* Microeconomics Section */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Microeconomics</h2>
            <div className={styles.subsection}>
              <ul className={styles.navList}>
                <li>
                  <Link
                    href="/modelli/edgeworth"
                    className={styles.navLink}
                    onClick={() => setSidebarOpen(false)}
                  >
                    Edgeworth Box
                  </Link>
                </li>
                <li>
                  <Link
                    href="/modelli/robinson"
                    className={styles.navLink}
                    onClick={() => setSidebarOpen(false)}
                  >
                    Robinson Economy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/modelli/twoconsumers_oneproducer"
                    className={styles.navLink}
                    onClick={() => setSidebarOpen(false)}
                  >
                    Two Consumers, One Producer
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.subsection}>
              <Button
                variant="link"
                className={styles.collapseButton}
                onClick={() =>
                  setMicroExercisesOpen(!microExercisesOpen)
                }
                aria-expanded={microExercisesOpen}
              >
                <span className="d-flex align-items-center">
                  {microExercisesOpen ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                  <span className="ms-2">Examples</span>
                </span>
              </Button>
              <Collapse in={microExercisesOpen}>
                <ul className={styles.navList}>
                  <li>
                    <Link
                      href="/modelli/esempio_01_ump"
                      className={styles.navLink}
                      onClick={() => setSidebarOpen(false)}
                    >
                      UMP ES1: Cobb-Douglas
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/modelli/esempio_02_ump"
                      className={styles.navLink}
                      onClick={() => setSidebarOpen(false)}
                    >
                      UMP ES2: Corner Solution
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/modelli/esempio_03_ump"
                      className={styles.navLink}
                      onClick={() => setSidebarOpen(false)}
                    >
                      UMP ES3: Perfect Complements
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/modelli/esempio_04_emp"
                      className={styles.navLink}
                      onClick={() => setSidebarOpen(false)}
                    >
                      EMP ES1: Cobb-Douglas
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/modelli/esempio_05_ump_ces"
                      className={styles.navLink}
                      onClick={() => setSidebarOpen(false)}
                    >
                      UMP CES
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/modelli/esempio_06_emp_ces"
                      className={styles.navLink}
                      onClick={() => setSidebarOpen(false)}
                    >
                      EMP CES
                    </Link>
                  </li>
                </ul>
              </Collapse>
            </div>
          </div>

          {/* Statistics Section */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Statistics</h2>
            <div className={styles.subsection}>
              <ul className={styles.navList}>
                <li>
                  <Link
                    href="/statistics/probability-distributions"
                    className={styles.navLink}
                    onClick={() => setSidebarOpen(false)}
                  >
                    Probability Distributions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/statistics/newtons-method"
                    className={styles.navLink}
                    onClick={() => setSidebarOpen(false)}
                  >
                    Newton’s Method
                  </Link>
                </li>
                <li>
                  <Link
                    href="/statistics/taylor-series"
                    className={styles.navLink}
                    onClick={() => setSidebarOpen(false)}
                  >
                    Taylor Series
                  </Link>
                </li>
                <li>
                  <Link
                    href="/statistics/linear-regression-2d"
                    className={styles.navLink}
                    onClick={() => setSidebarOpen(false)}
                  >
                    Linear Regression 2D
                  </Link>
                </li>
                <li>
                  <Link
                    href="/statistics/linear-regression-3d"
                    className={styles.navLink}
                    onClick={() => setSidebarOpen(false)}
                  >
                    Linear Regression 3D
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.subsection}>
              <Button
                variant="link"
                className={styles.collapseButton}
                onClick={() =>
                  setStatExercisesOpen(!statExercisesOpen)
                }
                aria-expanded={statExercisesOpen}
              >
                <span className="d-flex align-items-center">
                  {statExercisesOpen ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                  <span className="ms-2">Examples</span>
                </span>
              </Button>
              <Collapse in={statExercisesOpen}>
                <ul className={styles.navList}>
                  <li className="text-muted fst-italic ps-3">
                    (Coming soon)
                  </li>
                </ul>
              </Collapse>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default Layout;

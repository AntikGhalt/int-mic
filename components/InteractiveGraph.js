// components/InteractiveGraph.js
import React, { useEffect } from "react";
import { Button, Card, Row, Col, Container } from "react-bootstrap";

const InteractiveGraph = ({
  title,
  description,
  defaultEmbedUrl,
  newTabUrl,
  editUrl,
}) => {
  // Effetto per il rendering delle formulee
  useEffect(() => {
    const renderMathJax = () => {
      if (typeof window !== 'undefined' && window.MathJax) {
        window.MathJax.typesetPromise()
          .catch(err => console.error('MathJax typeset error:', err));
      }
    };

    // Timer di fallback per gestire caricamento asincrono
    const retryInterval = setInterval(renderMathJax, 500);
    renderMathJax();

    return () => clearInterval(retryInterval);
  }, [description]);

  // Funzioni per i pulsanti
  const openNewTab = () => window.open(newTabUrl, "_blank");
  const handleFullScreen = () => {
    const iframe = document.getElementById("graph-iframe");
    iframe?.requestFullscreen?.();
  };

  return (
    <Container className="py-4">
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <div 
            id="math-content"
            dangerouslySetInnerHTML={{ __html: description }} 
            className="text-muted"
          />
        </Card.Body>
      </Card>

      {/* Iframe con controllo di sicurezza aggiuntivo */}
      <Card className="shadow-sm">
        <Card.Body>
          <Row className="mb-3">
            <Col>
              <p className="m-0 text-muted fs-5">
                Grafico interattivo {title}
              </p>
            </Col>
            <Col className="d-flex justify-content-end gap-2">
              <Button variant="danger" size="sm" onClick={handleFullScreen}>
                Tutto Schermo
              </Button>
              <Button variant="danger" size="sm" onClick={openNewTab}>
                Apri in nuova pagina
              </Button>
            </Col>
          </Row>

          <div className="position-relative" style={{ minHeight: '600px' }}>
            <iframe
              id="graph-iframe"
              title="graph"
              src={`${defaultEmbedUrl}`}
              style={{ 
                width: '100%', 
                height: '600px', 
                border: '1px solid #dee2e6',
                borderRadius: '0.375rem'
              }}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <div className="mt-3 text-center">
              <a
                href={`${editUrl}?embed`}
                target="_blank"
                rel="noopener"
                className="btn btn-outline-danger btn-sm"
              >
                Versione modificabile
              </a>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default InteractiveGraph;
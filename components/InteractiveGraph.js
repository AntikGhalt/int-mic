import React, { useEffect } from "react";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import { Fullscreen, BoxArrowUpRight, PencilSquare } from "react-bootstrap-icons";

const InteractiveGraph = ({
  title,
  description,
  defaultEmbedUrl,
  newTabUrl,
  editUrl,
}) => {
  useEffect(() => {
    let retryInterval;

    const renderMathJax = () => {
      if (typeof window !== 'undefined' && window.MathJax) {
        window.MathJax.typesetPromise()
          .then(() => {
            if (retryInterval) {
              clearInterval(retryInterval);
              retryInterval = null;
            }
          })
          .catch(err => console.error('MathJax typeset error:', err));
      }
    };

    retryInterval = setInterval(renderMathJax, 500);
    renderMathJax();

    return () => {
      if (retryInterval) {
        clearInterval(retryInterval);
      }
    };
  }, [description]);

  const openNewTab = () => window.open(newTabUrl, "_blank");
  const handleFullScreen = () => {
    const iframe = document.getElementById("graph-iframe");
    if (iframe?.requestFullscreen) {
      iframe.requestFullscreen();
    }
  };


  return (
    <Container className="py-4">
      <Card className="mb-4 shadow-sm border-0">
        <Card.Body className="p-4">
          <h1 className="h2 mb-4 text-sap-red fw-bold">{title}</h1>
          <div 
            id="math-content"
            dangerouslySetInnerHTML={{ __html: description }} 
            className="description-content"
          />
        </Card.Body>
      </Card>

      <Card className="shadow border-0">
        <Card.Body className="p-0">
          <div className="graph-header p-3 bg-light border-bottom">
            <Row className="align-items-center">
              <Col>
                <p className="m-0 text-muted fw-medium">
                  Interactive Graph - {title}
                </p>
              </Col>
              <Col className="d-flex justify-content-end gap-2">
                <Button 
                  variant="outline-danger" 
                  size="sm" 
                  onClick={handleFullScreen}
                  className="d-flex align-items-center gap-1"
                >
                  <Fullscreen size={16} />
                  <span className="d-none d-sm-inline">Fullscreen</span>
                </Button>
                <Button 
                  variant="outline-danger" 
                  size="sm" 
                  onClick={openNewTab}
                  className="d-flex align-items-center gap-1"
                >
                  <BoxArrowUpRight size={16} />
                  <span className="d-none d-sm-inline">New Tab</span>
                </Button>
              </Col>
            </Row>
          </div>

          <div className="graph-container">
            <iframe
              id="graph-iframe"
              title={`Interactive graph for ${title}`}
              src={`${defaultEmbedUrl}`}
              style={{ 
                width: '100%', 
                height: '650px', 
                border: 'none',
              }}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          {editUrl && (
          <div className="text-center p-3 bg-light border-top">
            {/* Aggiunto il tag di apertura <a> */}
            <a
              href={`${editUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline-secondary d-inline-flex align-items-center gap-2"
            >
              <PencilSquare size={16} />
              Open Editable Version
            </a>
          </div>
           )}
        </Card.Body>
      </Card>

      <style jsx>{`
        .text-sap-red {
          color: var(--sap-red);
        }
        
        .description-content {
          font-size: 1.05rem;
          line-height: 1.7;
          color: #495057;
        }
        
        .description-content ul {
          margin-top: 1rem;
          padding-left: 1.5rem;
        }
        
        .description-content li {
          margin-bottom: 0.5rem;
        }
        
        .description-content strong {
          color: #2c3e50;
          font-weight: 600;
        }
        
        .graph-header {
          background-color: #f8f9fa !important;
        }
        
        .graph-container {
          background-color: #ffffff;
          position: relative;
        }
        
        .btn-outline-danger:hover {
          transform: translateY(-1px);
          box-shadow: 0 2px 4px rgba(181, 18, 27, 0.2);
        }
        
        @media (max-width: 576px) {
          .graph-container iframe {
            height: 500px !important;
          }
        }
      `}</style>
    </Container>
  );
};

export default InteractiveGraph;
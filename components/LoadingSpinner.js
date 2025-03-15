export default function LoadingSpinner() {
    return (
      <div className="d-flex justify-content-center my-5">
        <div className="spinner-border text-danger" style={{ width: '3rem', height: '3rem' }}>
          <span className="visually-hidden">Caricamento...</span>
        </div>
      </div>
    );
  }
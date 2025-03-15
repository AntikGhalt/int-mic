import { useState, useEffect } from "react";
import InteractiveGraph from "../../components/InteractiveGraph";
import LoadingSpinner from "../../components/LoadingSpinner";

export default function ModelloPage({ id }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/mock-dati/${id}`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const fetchedData = await res.json();
        if (!fetchedData || typeof fetchedData !== "object") {
          throw new Error("Dati non validi");
        }

        // Sostituzione diretta dei placeholder
        let processedDescription = fetchedData.description || "";
        if (Array.isArray(fetchedData.mathFormulas)) {
          fetchedData.mathFormulas.forEach((formula, index) => {
            const pattern = new RegExp(`\\{mathFormula${index + 1}\\}`, "g");
            processedDescription = processedDescription.replace(pattern, formula);
          });
        }

        setData({ ...fetchedData, description: processedDescription });

      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    return <div className="alert alert-danger m-4">Errore nel caricamento: {error}</div>;
  }

  if (!data) {
    return <LoadingSpinner />;
  }

  return (
    <InteractiveGraph
      title={data.title || "Titolo non disponibile"}
      description={data.description} 
      defaultEmbedUrl={data.defaultEmbedUrl}
      newTabUrl={data.newTabUrl}
      editUrl={data.editUrl}
    />
  );
}

export async function getServerSideProps({ params }) {
  return {
    props: { id: params.id },
  };
}
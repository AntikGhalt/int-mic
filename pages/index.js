import InteractiveGraph from '../components/InteractiveGraph.js';

const Home = () => {
  const mathFormula = "\\(\\displaystyle (x - h)^2 + (y - k)^2 = r^2\\)"; // Formula matematica

  const description = `
    Spiegazione funzionamento di Desmos. <br/><br/>
    Formula circonferenza: <br/><br/>  
    ${mathFormula}<br/><br/>
    Interazione con grafico interattivo <br/><br/>
    <ul>
      <li>Premere il tasto 'Shadows on' per mostrare l'area del cerchio </li>
      <li>Trascinare 'Radius' per cambiare la dimensione del raggio </li>
      <li>Trascinare 'Drag' per cambiare la posizione della figura </li>
      <li>Cambiare il valore dell'esponente della formula per ottenere trasformare il cerchio in un quadrato</li>
    </ul>
  `;

  return (
    <div>
      <InteractiveGraph
        title="Home"
        description={description}
        defaultEmbedUrl="https://www.desmos.com/calculator/ud7jgofu04?embed"
        newTabUrl="https://www.desmos.com/calculator/ud7jgofu04?embed"
        editUrl="https://www.desmos.com/calculator/ud7jgofu04"
      />
    </div>
  );
};

export default Home;

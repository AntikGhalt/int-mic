import InteractiveGraph from '../components/InteractiveGraph.js';

const Home = () => {
  const mathFormula = "\\(\\displaystyle (x - h)^2 + (y - k)^2 = r^2\\)"; // Formula matematica

  const description = `
    Explanation of how Desmos works. <br/><br/>
    Circle formula: <br/><br/>
    ${mathFormula}<br/><br/>
    Interaction with the interactive graph <br/><br/>
    <ul>
      <li>Press the 'Shadows on' button to show the area of the circle</li>
      <li>Drag the 'Radius' slider to change the radius size</li>
      <li>Drag the 'Drag' point to change the figure's position</li>
      <li>Change the value of the formula's exponent to transform the circle into a square</li>
    </ul>
  `;

  return (
    <div>
      <InteractiveGraph
        title="Home - example"
        description={description}
        defaultEmbedUrl="https://www.desmos.com/calculator/ud7jgofu04?embed"
        newTabUrl="https://www.desmos.com/calculator/ud7jgofu04?embed"
        editUrl="https://www.desmos.com/calculator/ud7jgofu04"
      />
    </div>
  );
};

export default Home;

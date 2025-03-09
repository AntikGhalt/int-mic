<script>
  import Vediamo from "$lib/components/vediamo.svelte"
  const mathFormula = "\\(\\displaystyle (x - h)^2 + (y - k)^2 = r^2\\)";
  // Se ti serve logica specifica per questa pagina, la metti qui.
</script>

<div>
  <Vediamo 
    title = "Home"
    description = "Spiegazione funzionamento di Desmos. <br/><br/>
      Formula circonferenza: <br/><br/>  
      {mathFormula}<br/><br/>
      Interazione con grafico interattivo <br/><br/>
        <ul>
        <li>Premere il tasto 'Shadows on' per mostrare l'area del cerchio </li>
        <li>Trascinare 'Radius' per cambiare la dimensione del raggio </li>
        <li>Trascinare 'Drag' per cambiare la posizione della della figura </li>
        <li>Cambiare il valore dell'esponente della formula per ottenere trasformare il cerchio in un quadrato</li>
        "
    formula = true
    defaultEmbedUrl = "https://www.desmos.com/calculator/ud7jgofu04?embed"
    newTabUrl = "https://www.desmos.com/calculator/ud7jgofu04?embed"
    editUrl = "https://www.desmos.com/calculator/ud7jgofu04"
  />
</div>

<style>
  /* .intro-box {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 12px;
    padding: 20px 30px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  } */
</style>

<script>
  import Vediamo from "$lib/components/vediamo.svelte"
  const mathFormula = "\\(\\displaystyle (x - h)^2 + (y - k)^2 = r^2\\)";
  // Se ti serve logica specifica per questa pagina, la metti qui.
</script>

<div>
  <Vediamo 
    title = "Home"
    description = "Esempio di spiegazione funzionamento di Desmos"
    formula = {mathFormula}
    defaultEmbedUrl = "https://www.desmos.com/calculator/4ukrylhyqh?embed"
    newTabUrl = "https://www.desmos.com/calculator/4ukrylhyqh?embed"
    editUrl = "https://www.desmos.com/calculator/4ukrylhyqh"
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

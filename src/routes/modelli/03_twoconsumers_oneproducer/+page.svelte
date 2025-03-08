<script>
  import Vediamo from "$lib/components/vediamo.svelte";
  const mathFormula = String.raw`\( \displaystyle p = \frac{p_1}{p_2} = \frac{a \omega_{21} + b \omega_{22}}{(1-a)\omega_{11} + (1-b)\omega_{12}} \)`;

  // Se ti serve logica specifica per questa pagina, la metti qui.
</script>

<div>
  <Vediamo
    title="Two consumer one producer"
    description="Analizziamo un modello con due consumatori e un produttore,
        utilizzando vettori per rappresentare le interazioni economiche.<br/><br/><strong>Prezzi di equilibrio: <br/><br/>
        {mathFormula}"
    formula= true
    defaultEmbedUrl = "https://www.desmos.com/calculator/5uqaldlwet?embed"
    newTabUrl = "https://www.desmos.com/calculator/5uqaldlwet?embed"
    editUrl = "https://www.desmos.com/calculator/5uqaldlwet"
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

<script>
  import Vediamo from "$lib/components/vediamo.svelte";
  const mathFormula =
    "\\[ \\Large \\frac{w}{p} = a \\left( \\frac{1 - B(1-a)}{aBT} \\right)^{1-a} \\]";
  // Se ti serve logica specifica per questa pagina, la metti qui.
</script>

<div>
  <Vediamo
    title="Robinson economy"
      description="Questa sezione introduce il modello economico di Robinson Crusoe, 
          che illustra le scelte di consumo e produzione in un contesto di risorse limitate.<br/><br/>
          <strong> Prezzi di equilibrio: </strong> <br/><br/>
          {mathFormula}
          "
    defaultEmbedUrl="https://www.desmos.com/calculator/dot005ofqi?embed"
    newTabUrl="https://www.desmos.com/calculator/dot005ofqi?embed"
    editUrl="https://www.desmos.com/calculator/dot005ofqi"
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

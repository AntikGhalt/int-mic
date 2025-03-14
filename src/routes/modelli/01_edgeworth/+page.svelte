<script>
  import { onMount } from "svelte";
  import Vediamo from "$lib/components/vediamo.svelte";
  // const mathFormula1 = "\\[ \\Large p = \\frac{p_1}{p_2} = \\frac{a}{1-a} \\]";
  // const mathFormula2 =
  //   "\\[ \\Large p = \\frac{p_1}{p_2} = \\frac{a \\omega_{21} + b \\omega_{22}}{(1-a)\\omega_{11} + (1-b)\\omega_{12}} \\]";
  let data;
  let modifiedDescription;

  onMount(async () => {
    const res = await fetch("/api/mock-data");
    data = await res.json();

    // Clona e sostituisce le formule
    modifiedDescription = data.description;
    data.mathFormulas.forEach((formula, index) => {
      modifiedDescription = modifiedDescription.replace(`{mathFormula${index + 1}}`, formula);
    });
  });
</script>

<div>
  <!-- <Vediamo
    title="Edgeworth box"
    description="
        In questa pagina, trovi un esempio di modello Edgeworth Box integrato in Desmos.  
        Aggiungi qui le formule, la spiegazione testuale e i rimandi teorici che preferisci. <br/><br/>
        <strong> Cobb-Douglas with same coefficient: </strong> 
        {mathFormula1}
        <strong> Cobb-Douglas with different coefficients: </strong> 
        {mathFormula2}
        "
    defaultEmbedUrl="https://www.desmos.com/calculator/ziofyoyupi?embed"
    newTabUrl="https://www.desmos.com/calculator/ziofyoyupi?embed"
    editUrl="https://www.desmos.com/calculator/ziofyoyupi"
  /> -->
  {#if data}
    <Vediamo
      title={data.title}
      description={modifiedDescription}
      defaultEmbedUrl={data.defaultEmbedUrl}
      newTabUrl={data.newTabUrl}
      editUrl={data.editUrl}
    />
  {:else}
    <p>Caricamento in corso...</p>
  {/if}
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

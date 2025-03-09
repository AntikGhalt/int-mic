<script>
  import Vediamo from "$lib/components/vediamo.svelte";
  const mathFormula1 = String.raw`\( \displaystyle p = \frac{p_1}{p_2} = \frac{a \omega_{21} + b \omega_{22}}{(1-a)\omega_{11} + (1-b)\omega_{12}} \)`;
  const mathFormula2 = String.raw`\( \displaystyle  \frac{w}{p} = \lambda \left( \frac{T_{2}\Bigl(1 - \frac{a+b}{2}\Bigr)}{1 + \frac{1-\lambda}{\lambda}(a\varepsilon_{1} + b\varepsilon_{2})} \right)^{\lambda-1} \)`;
  // test formule con displaystyle diverso, proabably una merda 
</script>

<div>
  <Vediamo
    title="Two consumer one producer"
    description="Analizziamo un modello con due consumatori e un produttore,
        utilizzando vettori per rappresentare le interazioni economiche.<br/><br/>
        <strong>Prezzi di equilibrio:</strong> <br/><br/>
         &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;{mathFormula1}<br/><br/>
        <strong>Economy with 2 consumers and production:</strong><br/><br/>
         &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;{mathFormula2}
        "
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

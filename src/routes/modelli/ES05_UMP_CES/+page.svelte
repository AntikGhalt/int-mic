<script>
    import Vediamo from "$lib/components/vediamo.svelte";
    const defaultEmbedUrl = "https://www.desmos.com/3d/1nsxbzyebp";
    
    // test formule con displaystyle diverso, proabably una merda 
  </script>
  
  <div>
    <Vediamo
      title="UMP Esercizio con CES"
      description="Esercizio Utility Maximization Problem basato su funzione di utilità Constant Elasticity of Substitution:
          "
      defaultEmbedUrl = {defaultEmbedUrl}
      newTabUrl = {defaultEmbedUrl}
      editUrl = {defaultEmbedUrl}
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
  
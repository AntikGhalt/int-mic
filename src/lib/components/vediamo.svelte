<script>
  // Props da ricevere dal componente padre
  export let title;
  export let description;
  export let formula;

  // Link per l'iframe, per la nuova tab e per la versione editabile
  export let defaultEmbedUrl;
  export let newTabUrl;
  export let editUrl;

  // Definiamo una reference per il container del grafico
  let container;
  let isFullScreen = false;

  // Funzione fullscreen: utilizza la reference 'container'
  function handleFullScreen() {
    if (!isFullScreen) {
      isFullScreen = true;
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen();
      } else if (container.msRequestFullscreen) {
        container.msRequestFullscreen();
      }
    } else {
      isFullScreen = false;
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  }

  // Funzione per aprire una nuova scheda
  function openNewTab() {
    window.open(newTabUrl, "_blank");
  }
</script>

<!-- BOX DI TESTO -->
<div class="content-box">
  <h2>{title}</h2>
   <!-- Mostriamo la formula con MathJax (se presente) usando {@html} per evitare errori -->
  <div>{@html description}</div> 
  <!-- <p>{formula}</p> -->
  {#if formula}
    <p>{@html formula}</p>
  {/if}
</div>

<!-- SEZIONE GRAFICO DESMOS -->
<div class="graph-container" bind:this={container}>
  <div class="graph-top-bar">
    <p>Grafico interattivo {title}</p>
    <div class="button-group">
      <button class="fullscreen-btn" on:click={handleFullScreen}
        >{!isFullScreen ? "Tutto Schermo" : "Riduci"}</button
      >
      <button class="newtab-btn" on:click={openNewTab}
        >Apri in nuova pagina</button
      >
    </div>
  </div>

  <iframe
    src={defaultEmbedUrl}
    frameborder="0"
    style="width: 100%; height: 600px; border: 1px solid #ccc; border-radius: 6px;"
  ></iframe>

  <div class="edit-button">
    <a href={editUrl} target="_blank">Versione modificabile</a>
  </div>
</div>

<style>
  /* BOX DI TESTO */
  .content-box {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 12px;
    padding: 20px 30px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
  .content-box h2 {
    margin-bottom: 0.5em;
    color: #2c2c2c;
    font-family: "Merriweather", serif;
  }
  .content-box p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1em;
  }

  /* GRAFICO DESMOS */
  .graph-container {
    margin-top: 20px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
  .graph-top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  .graph-top-bar p {
    font-size: 1.1em;
    color: #555;
    margin-right: 10px;
  }
  .button-group {
    display: flex;
    gap: 10px;
  }
  .fullscreen-btn,
  .newtab-btn {
    background-color: #9c2732;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.9em;
    padding: 8px 12px;
    transition: background-color 0.3s;
  }
  .fullscreen-btn:hover,
  .newtab-btn:hover {
    background-color: #b1303c;
  }

  /* BOTTONE "VERSIONE MODIFICABILE" */
  .edit-button {
    display: inline-block;
    margin-top: 10px;
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fefefe;
    transition: box-shadow 0.2s;
    text-align: center;
    max-width: 220px;
  }
  .edit-button:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
  .edit-button a {
    text-decoration: underline;
    color: #7b1f28;
  }
  .edit-button a:hover {
    color: #b1303c;
  }
</style>

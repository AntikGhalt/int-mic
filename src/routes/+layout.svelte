<script>
    import "bootstrap/dist/css/bootstrap.min.css";
    // Stato per la sidebar e la lingua
    let sidebarOpen = false;
    let selectedLanguage = "it";

    function toggleSidebar() {
        sidebarOpen = !sidebarOpen;
    }

    function closeSidebar() {
        sidebarOpen = false;
    }
</script>

<header class="d-flex align-items-center justify-content-between">
    <!-- Bottone a sinistra -->
    <button class="menu-btn" on:click={toggleSidebar}> &#9776; </button>

    <!-- Titolo centrato; usa flex-grow per occupare lo spazio centrale -->
    <div class="site-title flex-grow-1 text-center">
        Interactive Microeconomics
    </div>

    <!-- Logo a destra -->
    <div class="logo-area">
        <img src="/logo_sapienza.png" alt="Sapienza Logo" class="logo" />
    </div>
</header>

<!-- SIDEBAR -->
<div class="sidebar" class:open={sidebarOpen}>
    <ul>
        <li><a href="/">Home</a></li>
    </ul>
    <hr />
    <h2>Microeconomia</h2>
    <ul>
        <li style="color: #999;">(empty)</li>
    </ul>
    <hr />
    <h2>Microeconomia Avanzata</h2>
    <ul>
        <!-- Esempio: rotta /edgeworth, /robinson, ecc. -->
        <li><a href="/modelli/01_edgeworth">Edgeworth</a></li>
        <li><a href="/modelli/02_robinson">Robinson Economy</a></li>
        <li><a href="/modelli/03_twoconsumers_oneproducer">2 consumer 1 producer</a></li>
    </ul>
</div>

<!-- Overlay per chiudere la sidebar -->
<div class="overlay" class:show={sidebarOpen} on:click={closeSidebar}></div>
<svelte:head>
    <title>Il Mio Progetto</title>
    <script
        id="MathJax-script"
        async
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
    ></script>
    <link
        href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Open+Sans:wght@400;600&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<!-- Qui dentro verrà mostrato il contenuto delle singole pagine -->
<main>
    <slot />
</main>

<style>
    /* STILI GLOBALI E HEADER */

    :global(*) {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :global(html, body) {
        font-family: "Open Sans", Arial, sans-serif;
        background-color: #fafafa;
        color: #2c2c2c;
    }

    header {
        position: relative;
        background: linear-gradient(90deg, #7b1f28, #9c2732);
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
    }

    .menu-btn {
        background: none;
        border: none;
        font-size: 1.4rem;
        cursor: pointer;
        color: #fff;
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .menu-btn:focus {
        outline: 2px dashed #fff;
    }

    .logo-area {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .logo {
        width: 120px;
        height: auto;
        display: inline-block;
    }

    .site-title {
        font-family: "Merriweather", serif;
        font-size: 1.2rem;
        font-weight: bold;
        white-space: nowrap;
    }

    .language-switcher {
        display: flex;
        gap: 10px;
    }

    .language-switcher img {
        width: 28px;
        height: auto;
        cursor: pointer;
        border-radius: 4px;
        border: 2px solid transparent;
        transition:
            transform 0.2s,
            box-shadow 0.2s;
    }

    .language-switcher img:hover {
        transform: scale(1.08);
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    }

    .language-switcher img.selected {
        border-color: #fff;
    }

    .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        width: 260px;
        height: 100vh;
        background-color: #fff;
        box-shadow: 2px 0 8px rgba(0, 0, 0, 0.2);
        transform: translateX(-270px);
        transition: transform 0.3s ease;
        z-index: 999;
        padding: 20px;
    }

    .sidebar.open {
        transform: translateX(0);
    }

    .sidebar h2 {
        font-family: "Merriweather", serif;
        font-size: 1.1rem;
        margin-bottom: 10px;
        color: #7b1f28;
    }

    .sidebar ul {
        list-style: none;
        margin-top: 5px;
    }

    .sidebar li {
        margin-bottom: 8px;
    }

    .sidebar a {
        text-decoration: none;
        color: #2c2c2c;
        font-weight: 600;
        transition: color 0.2s;
    }

    .sidebar a:hover {
        color: #7b1f28;
    }

    .sidebar hr {
        margin: 15px 0;
        border: none;
        border-top: 1px solid #ccc;
    }

    .overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 998;
    }

    .overlay.show {
        display: block;
    }

    main {
        max-width: 1000px;
        margin: 0 auto;
        padding: 20px;
    }

    @media (max-width: 768px) {
        .site-title {
            font-size: 1rem;
        }
        .menu-btn {
            font-size: 1.2rem;
        }
        .sidebar {
            width: 220px;
            transform: translateX(-230px);
        }
        .sidebar.open {
            transform: translateX(0);
        }
    }
</style>

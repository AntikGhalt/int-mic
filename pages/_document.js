import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="it">
      <Head>
        {/* Favicon per tutti i dispositivi */}
        <link rel="icon" type="image/png" href="/favicon.png" />

        {/* Aggiungi queste linee per Apple/Safari */}
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
          async
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

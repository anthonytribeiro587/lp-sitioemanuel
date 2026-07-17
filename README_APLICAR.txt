ARQUIVOS CORRETOS — FAVICON SÍTIO EMANUEL

Copie os arquivos exatamente nestes caminhos do repositório:

public/favicon.ico
public/favicon.png
public/icon.png
public/icon-192.png
public/icon-512.png
public/apple-icon.png
app/layout.tsx
app/manifest.ts

IMPORTANTE:
1. Apague estes arquivos antigos, se existirem:
   app/icon.svg
   public/favicon-fallback.svg

2. Não use SVG com PNG em base64 para favicon.
   O navegador/Vercel pode quebrar ou cachear errado.

3. Depois do deploy, teste:
   https://lp-sitioemanuel.vercel.app/favicon.ico
   https://lp-sitioemanuel.vercel.app/favicon.png
   https://lp-sitioemanuel.vercel.app/icon-192.png

4. No navegador, use janela anônima ou Ctrl + Shift + R.
   O Chrome segura cache de favicon por bastante tempo.

5. No Google Search Console, depois do deploy, solicite indexação novamente da home.

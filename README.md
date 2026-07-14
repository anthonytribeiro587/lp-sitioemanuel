# Sítio Emanuel — Landing Page Institucional

Landing page institucional do Sítio Emanuel, em Gravataí/RS.

## Conteúdo do projeto

- página inicial responsiva;
- estrutura e galeria de fotos locais;
- avaliações do Google;
- informações de localização;
- perguntas frequentes;
- contato direto pelo WhatsApp;
- SEO, sitemap, robots e dados estruturados.

## O que não faz parte deste projeto

Este projeto não possui agenda, consulta automática de datas, formulário de reserva, painel administrativo, autenticação, banco de dados ou integração com Supabase.

## Tecnologias

- Next.js 16;
- React 19;
- TypeScript;
- Tailwind CSS 4.

## Executar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Variáveis de ambiente

Copie `.env.example` para `.env.local` quando necessário.

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5551986129832
GOOGLE_SITE_VERIFICATION=
```

O número deve conter somente dígitos, incluindo código do país e DDD.

## Google Search Console

O projeto disponibiliza automaticamente:

- `https://lp-sitioemanuel.vercel.app/sitemap.xml`;
- `https://lp-sitioemanuel.vercel.app/robots.txt`;
- URL canônica;
- Open Graph e Twitter Card;
- dados estruturados JSON-LD;
- manifesto do site;
- suporte à verificação por meta tag.

Para verificar pelo método de meta tag:

1. copie o código fornecido pelo Google Search Console;
2. crie na Vercel a variável `GOOGLE_SITE_VERIFICATION`;
3. informe somente o conteúdo do atributo `content` da meta tag;
4. faça um novo deploy;
5. clique em **Verificar** no Search Console.

Depois da verificação, envie no Search Console o sitemap:

```text
sitemap.xml
```

## Arquivos institucionais

As fotos e o logotipo ficam dentro da pasta `public` deste repositório. O site não depende do projeto legado para carregar imagens em produção.

# Sítio Emanuel — Landing Page Institucional

Landing page institucional do Sítio Emanuel, em Gravataí/RS.

Este repositório mantém somente a apresentação pública do espaço:

- página inicial responsiva;
- estrutura e galeria de fotos;
- avaliações do Google;
- informações de localização;
- perguntas frequentes;
- contato direto pelo WhatsApp;
- SEO e compartilhamento social.

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

## WhatsApp

O número padrão é `5551995092781`.

Para alterar sem editar o código, configure no Vercel:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=55DDDNUMERO
```

Use apenas números, incluindo código do país e DDD.

## Deploy

O projeto está pronto para publicação na Vercel. Importe o repositório, configure a variável opcional de WhatsApp e faça o deploy.

## Fotos

A landing page reutiliza temporariamente as fotos públicas armazenadas no repositório legado `sistema-agendamento`. O sistema legado deve permanecer público enquanto esses arquivos não forem copiados para a pasta `public` deste projeto.

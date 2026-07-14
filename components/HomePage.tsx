import Image from "next/image";
import PhotoGallery from "@/components/PhotoGallery";

const ASSET_BASE = "";

type IconName =
  | "leaf"
  | "users"
  | "building"
  | "map"
  | "whatsapp"
  | "arrow";

function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  } as const;

  if (name === "leaf") {
    return (
      <svg {...common}>
        <path d="M20 4.5C12.5 4.6 7.3 7.7 5.4 13.1c-.8 2.3-.4 4.7.7 6.4 1.9-4.8 5.1-8.3 9.9-10.8-3.7 2.9-6.3 6.5-7.8 10.8 4 .4 7.4-1.3 9.4-4.3C19.4 12.4 20.1 8.7 20 4.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "users") {
    return (
      <svg {...common}>
        <path d="M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM15.5 10a2.8 2.8 0 1 0 0-5.6M3 20v-1.6A4.4 4.4 0 0 1 7.4 14h3.2a4.4 4.4 0 0 1 4.4 4.4V20M15.5 14h.9a4.6 4.6 0 0 1 4.6 4.6V20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "building") {
    return (
      <svg {...common}>
        <path d="M4 21V5.5L13 3v18M13 8h7v13M7 8h2M7 12h2M7 16h2M16 11h1M16 15h1M2 21h20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "map") {
    return (
      <svg {...common}>
        <path d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="2.1" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    );
  }

  if (name === "whatsapp") {
    return (
      <svg {...common} viewBox="0 0 32 32" fill="currentColor">
        <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.896.756 5.726 2.194 8.215L0 32l7.604-2.168a15.944 15.944 0 008.396 2.354c8.836 0 16-7.164 16-16S24.836.396 16 .396zm0 29.25a13.1 13.1 0 01-6.676-1.832l-.478-.284-4.512 1.288 1.208-4.404-.312-.454A13.07 13.07 0 012.75 16.396C2.75 9.12 8.724 3.146 16 3.146s13.25 5.974 13.25 13.25S23.276 29.646 16 29.646zm7.396-9.812c-.404-.202-2.394-1.18-2.766-1.314-.372-.134-.642-.202-.912.202-.27.404-1.046 1.314-1.284 1.584-.238.27-.476.304-.88.102-.404-.202-1.704-.628-3.248-2.002-1.202-1.07-2.014-2.392-2.252-2.796-.238-.404-.026-.622.176-.824.182-.182.404-.476.606-.714.202-.238.27-.404.404-.674.134-.27.067-.506-.034-.708-.102-.202-.912-2.202-1.248-3.014-.328-.788-.66-.68-.912-.694-.238-.012-.506-.014-.774-.014-.27 0-.708.102-1.078.506-.372.404-1.414 1.382-1.414 3.366 0 1.984 1.446 3.9 1.648 4.17.202.27 2.85 4.354 6.908 6.104.966.416 1.72.664 2.306.85.968.308 1.85.264 2.546.16.776-.116 2.394-.978 2.732-1.924.338-.946.338-1.756.236-1.924-.102-.168-.372-.27-.776-.472z" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const features: Array<{ icon: IconName; title: string; text: string }> = [
  {
    icon: "leaf",
    title: "Natureza e tranquilidade",
    text: "Contato direto com a natureza para renovar corpo, mente e espírito.",
  },
  {
    icon: "users",
    title: "Espaço para grupos",
    text: "Ideal para igrejas, retiros, encontros, acampamentos e eventos em grupo.",
  },
  {
    icon: "building",
    title: "Estrutura completa",
    text: "Salões, dormitórios, área de lazer e ambientes preparados para receber bem.",
  },
  {
    icon: "whatsapp",
    title: "Atendimento direto",
    text: "Converse com a equipe pelo WhatsApp para conhecer valores, condições e detalhes.",
  },
];

const steps = [
  ["1", "Fale com a equipe", "Conte pelo WhatsApp o tipo de encontro que está planejando."],
  ["2", "Apresente seu grupo", "Informe a quantidade de pessoas, período desejado e necessidades principais."],
  ["3", "Conheça o espaço", "Tire suas dúvidas e, quando necessário, combine uma visita ao sítio."],
  ["4", "Alinhe os detalhes", "A equipe orienta sobre valores, condições e próximos passos para o evento."],
];

const reviews = [
  {
    name: "Malu",
    initial: "M",
    rating: 4,
    text: "Lugar lindo, aconchegante. Ótimo para retiros, reuniões especiais, bom atendimento, bons alojamentos.",
    href: "https://share.google/JVthegLrnfq2jgCLw",
  },
  {
    name: "André Cunha",
    initial: "A",
    rating: 5,
    text: "Simplesmente maravilhoso, o meu ED neste lugar foi tremendo. Com certeza Jesus se faz presente neste lugar!",
    href: "https://share.google/gMPxT3wgDXf8IXMH2",
  },
];

const faq = [
  [
    "Como consultar valores e datas?",
    "Entre em contato pelo WhatsApp. A equipe verifica as informações necessárias e orienta você de forma personalizada.",
  ],
  [
    "Quantas pessoas o sítio comporta?",
    "O espaço recebe grupos de diferentes tamanhos, normalmente entre 40 e 140 pessoas. A capacidade ideal pode variar conforme a programação.",
  ],
  [
    "É necessário sinal para confirmar?",
    "As condições comerciais, formas de pagamento e próximos passos são informados diretamente pela equipe.",
  ],
  [
    "Posso visitar o sítio antes do evento?",
    "Sim. Fale pelo WhatsApp para consultar horários e combinar uma visita ao espaço.",
  ],
];

function Stars({ rating = 5 }: { rating?: number }) {
  return (
    <span aria-label={`${rating} de 5 estrelas`} className="inline-flex gap-0.5 text-[15px] tracking-tight text-[#fbbc04]">
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} aria-hidden="true" className={index < rating ? "" : "text-white/20"}>
          ★
        </span>
      ))}
    </span>
  );
}

export default function HomePage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5551986129832";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Olá! Gostaria de conhecer melhor o Sítio Emanuel e consultar informações para um retiro ou encontro."
  )}`;

  return (
    <main className="overflow-hidden">
      <section className="px-3 pb-8 pt-3 sm:px-5 sm:pb-12 sm:pt-5">
        <div className="relative mx-auto min-h-[600px] max-w-[1220px] overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0b120d] shadow-[0_30px_90px_rgba(0,0,0,.48)] sm:min-h-[620px] sm:rounded-[28px] lg:min-h-[560px]">
          <Image
            src={`${ASSET_BASE}/fotos/2.jpeg`}
            alt="Vista aérea do Sítio Emanuel"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1220px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,8,5,.94)_0%,rgba(3,8,5,.78)_42%,rgba(3,8,5,.35)_76%,rgba(3,8,5,.16)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071009]/85 via-transparent to-black/20" />

          <div className="relative z-10 flex min-h-[600px] items-center px-6 py-14 sm:min-h-[620px] sm:px-10 lg:min-h-[560px] lg:px-16">
            <div className="max-w-[650px]">
              <h1 className="text-[42px] font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl lg:text-[58px]">
                Sítio Emanuel
              </h1>
              <p className="mt-4 text-[19px] font-medium leading-7 text-white sm:text-[22px]">
                Um espaço ideal para <span className="text-[#4ade80]">retiros e encontros</span>
              </p>
              <p className="mt-5 max-w-[560px] text-[14px] leading-6 text-white/72 sm:text-[15px] sm:leading-7">
                Ambiente completo, cercado pela natureza e preparado para momentos inesquecíveis com o seu grupo ou igreja.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#22c55e] px-5 text-[13px] font-semibold text-[#041108] transition hover:-translate-y-0.5 hover:bg-[#2bd268]"
                >
                  <Icon name="whatsapp" className="h-4 w-4" />
                  Falar com a equipe
                </a>
                <a
                  href="#estrutura"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/16 bg-black/20 px-5 text-[13px] font-semibold text-white transition hover:bg-white/[0.08]"
                >
                  <Icon name="building" className="h-4 w-4" />
                  Conhecer estrutura
                </a>
              </div>

              <div className="mt-8 flex flex-col gap-3 text-[12px] text-white/72 sm:flex-row sm:flex-wrap sm:gap-x-7">
                {[
                  ["leaf", "Ambiente natural"],
                  ["building", "Estrutura completa"],
                  ["whatsapp", "Atendimento humano"],
                ].map(([icon, label]) => (
                  <span key={label} className="inline-flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#4ade80]/20 bg-[#4ade80]/10 text-[#4ade80]">
                      <Icon name={icon as IconName} className="h-3.5 w-3.5" />
                    </span>
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-18">
        <div className="mx-auto max-w-[1120px]">
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-[-0.025em] text-white sm:text-[30px]">
              Por que escolher o Sítio Emanuel?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/52 sm:text-[15px]">
              Um espaço pensado para acolher grupos com conforto, tranquilidade e praticidade.
            </p>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((item) => (
              <article
                key={item.title}
                className="rounded-[18px] border border-white/[0.075] bg-white/[0.026] p-5 transition hover:-translate-y-1 hover:border-[#4ade80]/20 hover:bg-white/[0.04] sm:p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4ade80]/10 text-[#4ade80]">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-[14px] font-semibold text-white sm:text-[15px]">{item.title}</h3>
                <p className="mt-2 text-[12px] leading-5 text-white/52 sm:text-[13px]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="estrutura" className="scroll-mt-24 px-4 py-14 sm:px-6 sm:py-18">
        <div className="mx-auto max-w-[1120px]">
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-[-0.025em] text-white sm:text-[30px]">
              Conheça nossa estrutura
            </h2>
            <div className="mx-auto mt-3 h-px w-10 bg-[#4ade80]" />
          </div>

          <div className="mt-8 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] lg:grid-cols-4 lg:auto-rows-[170px]">
            <figure className="group relative col-span-2 row-span-2 overflow-hidden rounded-[18px] border border-white/[0.08] lg:col-span-2">
              <Image
                src={`${ASSET_BASE}/fotos/5.jpeg`}
                alt="Estrutura principal do Sítio Emanuel"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover transition duration-700 group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <figcaption className="absolute bottom-0 p-4 text-sm font-semibold text-white sm:p-5 sm:text-base">
                Estrutura principal
              </figcaption>
            </figure>

            {[6, 3, 4, 1].map((photo, index) => {
              const labels = ["Área externa", "Convivência", "Dormitórios", "Piscinas"];
              return (
                <figure key={photo} className="group relative overflow-hidden rounded-[18px] border border-white/[0.08]">
                  <Image
                    src={`${ASSET_BASE}/fotos/${photo}.jpeg`}
                    alt={labels[index]}
                    fill
                    sizes="(max-width: 640px) 50vw, 280px"
                    className="object-cover transition duration-700 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <figcaption className="absolute bottom-0 p-3 text-[11px] font-semibold text-white sm:p-4 sm:text-[13px]">
                    {labels[index]}
                  </figcaption>
                </figure>
              );
            })}
          </div>

          <div className="mt-5 flex justify-center">
            <PhotoGallery />
          </div>
        </div>
      </section>

      <section id="avaliacoes" aria-labelledby="avaliacoes-title" className="scroll-mt-24 px-4 py-14 sm:px-6 sm:py-18">
        <div className="mx-auto max-w-[1120px]">
          <div className="rounded-[22px] border border-white/[0.075] bg-white/[0.026] p-5 sm:p-8">
            <div className="flex flex-col gap-6 border-b border-white/[0.07] pb-7 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6ee7a0]">
                  Avaliações no Google
                </p>
                <h2 id="avaliacoes-title" className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-white sm:text-[30px]">
                  Quem já esteve aqui recomenda.
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/52">
                  Experiências reais de pessoas e grupos que já conheceram o Sítio Emanuel.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-black/20 px-4 py-3">
                  <span className="text-3xl font-semibold tracking-[-0.04em] text-white">4,9</span>
                  <div>
                    <Stars />
                    <p className="mt-0.5 text-[11px] text-white/45">60+ avaliações</p>
                  </div>
                </div>
                <a
                  href="https://share.google/1Tw9zT7p248iLoEYO"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white px-4 text-[12px] font-semibold text-[#07110a] transition hover:-translate-y-0.5 hover:bg-emerald-50"
                >
                  Ver avaliações no Google
                  <Icon name="arrow" className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {reviews.map((review) => (
                <article key={review.name} className="flex h-full flex-col rounded-[18px] border border-white/[0.075] bg-black/15 p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#4ade80]/12 text-sm font-semibold text-[#8cf0b2]">
                        {review.initial}
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-white">{review.name}</h3>
                        <p className="mt-0.5 text-[11px] text-white/42">Avaliação publicada no Google</p>
                      </div>
                    </div>
                    <Stars rating={review.rating} />
                  </div>
                  <blockquote className="mt-5 flex-1 text-[13px] leading-6 text-white/65">“{review.text}”</blockquote>
                  <a
                    href={review.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold text-[#6ee7a0] transition hover:text-[#8cf0b2]"
                  >
                    Conferir no Google
                    <Icon name="arrow" className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="scroll-mt-24 px-4 py-14 sm:px-6 sm:py-18">
        <div className="mx-auto max-w-[1120px] rounded-[22px] border border-white/[0.075] bg-white/[0.026] px-5 py-8 sm:px-8 sm:py-10">
          <h2 className="text-center text-2xl font-semibold tracking-[-0.025em] text-white sm:text-[28px]">
            Como planejar seu encontro
          </h2>

          <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
            {steps.map(([number, title, text], index) => (
              <article key={number} className="relative px-1 sm:px-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#4ade80] text-[11px] font-bold text-[#041108]">
                    {number}
                  </span>
                  <h3 className="text-[13px] font-semibold text-white">{title}</h3>
                  {index < steps.length - 1 ? <span className="ml-auto hidden text-[#4ade80]/65 lg:block">→</span> : null}
                </div>
                <p className="mt-3 pl-10 text-[12px] leading-5 text-white/50 sm:pl-0">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="relative mx-auto max-w-[1120px] overflow-hidden rounded-[20px] border border-[#4ade80]/12">
          <Image
            src={`${ASSET_BASE}/fotos/6.jpeg`}
            alt="Natureza no Sítio Emanuel"
            fill
            sizes="(max-width: 1120px) 100vw, 1120px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,29,15,.95),rgba(8,29,15,.72),rgba(8,29,15,.25))]" />
          <div className="relative flex flex-col gap-6 px-6 py-9 sm:flex-row sm:items-center sm:justify-between sm:px-9 sm:py-10">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold tracking-[-0.025em] text-white sm:text-[28px]">
                Planejando seu próximo retiro?
              </h2>
              <p className="mt-2 text-sm leading-6 text-white/68">
                Converse com nossa equipe para conhecer valores, condições e possibilidades para o seu grupo.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 text-[13px] font-semibold text-[#07110a] transition hover:-translate-y-0.5 hover:bg-emerald-50"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Conversar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section id="localizacao" className="scroll-mt-24 px-4 py-14 sm:px-6 sm:py-18">
        <div className="mx-auto grid max-w-[1120px] gap-4 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="flex flex-col justify-between rounded-[20px] border border-white/[0.075] bg-white/[0.026] p-6 sm:p-8">
            <div>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4ade80]/10 text-[#4ade80]">
                <Icon name="map" className="h-5 w-5" />
              </span>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.025em] text-white">Localização</h2>
              <p className="mt-3 text-sm leading-6 text-white/55">
                O Sítio Emanuel fica em Gravataí/RS, em uma região tranquila e cercada pela natureza.
              </p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=S%C3%ADtio+Emanuel+Retiros+Gravata%C3%AD"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-[12px] font-semibold text-white/72 transition hover:bg-white/[0.075] hover:text-white"
            >
              Abrir no Google Maps
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
          <div className="min-h-[320px] overflow-hidden rounded-[20px] border border-white/[0.08] bg-white/[0.025] sm:min-h-[390px]">
            <iframe
              title="Localização do Sítio Emanuel"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.8661566685896!2d-50.96700012378962!3d-29.86813357501282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95190d11b273ac4d%3A0xecbc16d6da05b014!2sSitio%20Emanuel%20Retiros!5e0!3m2!1spt-BR!2sbr!4v1776280247918!5m2!1spt-BR!2sbr"
              loading="lazy"
              className="h-full min-h-[320px] w-full border-0 grayscale-[18%] contrast-[1.02] sm:min-h-[390px]"
            />
          </div>
        </div>
      </section>

      <section id="contato" className="scroll-mt-24 px-4 py-14 sm:px-6 sm:py-18">
        <div className="mx-auto max-w-[1120px]">
          <h2 className="text-center text-2xl font-semibold tracking-[-0.025em] text-white sm:text-[28px]">
            Perguntas frequentes
          </h2>

          <div className="mt-8 grid gap-4 lg:grid-cols-[1.45fr_.75fr]">
            <div className="space-y-2.5">
              {faq.map(([question, answer]) => (
                <details key={question} className="group rounded-[14px] border border-white/[0.075] bg-white/[0.026] px-4 open:bg-white/[0.04]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[13px] font-medium text-white marker:content-none">
                    {question}
                    <span className="text-white/48 transition group-open:rotate-45 group-open:text-white">+</span>
                  </summary>
                  <p className="max-w-3xl pb-4 pr-6 text-[12px] leading-5 text-white/52">{answer}</p>
                </details>
              ))}
            </div>

            <aside className="rounded-[18px] border border-[#4ade80]/12 bg-[#4ade80]/[0.055] p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4ade80]/12 text-[#4ade80]">
                <Icon name="whatsapp" className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">Ficou com dúvidas?</h3>
              <p className="mt-2 text-[12px] leading-5 text-white/55">
                Fale diretamente com nossa equipe pelo WhatsApp.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold text-[#6ee7a0] transition hover:text-[#8cf0b2]"
              >
                Conversar no WhatsApp
                <Icon name="arrow" className="h-4 w-4" />
              </a>
            </aside>
          </div>
        </div>
      </section>

      <footer className="mt-8 border-t border-white/[0.07] bg-black/10 px-4 pb-8 pt-10 sm:px-6">
        <div className="mx-auto grid max-w-[1120px] gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_.8fr_.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-17 overflow-hidden">
                <Image
                  src={`${ASSET_BASE}/logo-sitio-emanuel.png`}
                  alt=""
                  fill
                  className="object-contain"
                  sizes="68px"
                />
              </div>
              <span className="text-sm font-semibold text-white">Sítio Emanuel</span>
            </div>
            <p className="mt-4 max-w-xs text-[12px] leading-5 text-white/45">
              Um espaço acolhedor para momentos que marcam vidas.
            </p>
          </div>

          <div>
            <h3 className="text-[12px] font-semibold text-white">Navegação</h3>
            <div className="mt-4 grid gap-2 text-[11px] text-white/48">
              <a href="#estrutura">Estrutura</a>
              <a href="#avaliacoes">Avaliações</a>
              <a href="#como-funciona">Como funciona</a>
              <a href="#localizacao">Localização</a>
            </div>
          </div>

          <div>
            <h3 className="text-[12px] font-semibold text-white">Contato</h3>
            <div className="mt-4 grid gap-3 text-[11px] text-white/48">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                <Icon name="whatsapp" className="h-3.5 w-3.5" />
                WhatsApp da equipe
              </a>
              <span className="inline-flex items-center gap-2">
                <Icon name="map" className="h-3.5 w-3.5" />
                Gravataí, RS
              </span>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-9 flex max-w-[1120px] flex-col gap-2 border-t border-white/[0.06] pt-5 text-[10px] text-white/34 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Sítio Emanuel. Todos os direitos reservados.</p>
          <p>Gravataí/RS</p>
        </div>
      </footer>
    </main>
  );
}

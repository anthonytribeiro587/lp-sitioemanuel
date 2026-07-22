import Image from "next/image";
import PhotoGallery from "@/components/PhotoGallery";

type IconName =
  | "leaf"
  | "home"
  | "shield"
  | "users"
  | "map"
  | "calendar"
  | "check"
  | "party"
  | "whatsapp"
  | "parking"
  | "bath"
  | "grill"
  | "arrow";

function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  } as const;

  const paths: Record<IconName, React.ReactNode> = {
    leaf: <path d="M20 4.5C12.5 4.6 7.3 7.7 5.4 13.1c-.8 2.3-.4 4.7.7 6.4 1.9-4.8 5.1-8.3 9.9-10.8-3.7 2.9-6.3 6.5-7.8 10.8 4 .4 7.4-1.3 9.4-4.3C19.4 12.4 20.1 8.7 20 4.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />,
    home: <path d="m3 11 9-7 9 7M5 10v10h14V10M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />,
    shield: <path d="M12 3 5 6v5c0 4.5 2.7 8 7 10 4.3-2 7-5.5 7-10V6l-7-3Zm-3 9 2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />,
    users: <path d="M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM15.5 10a2.8 2.8 0 1 0 0-5.6M3 20v-1.6A4.4 4.4 0 0 1 7.4 14h3.2a4.4 4.4 0 0 1 4.4 4.4V20M15.5 14h.9a4.6 4.6 0 0 1 4.6 4.6V20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />,
    map: <><path d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11Z" stroke="currentColor" strokeWidth="1.7" /><circle cx="12" cy="10" r="2.1" stroke="currentColor" strokeWidth="1.7" /></>,
    calendar: <path d="M7 3v3M17 3v3M4.5 9.5h15M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />,
    check: <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
    party: <><path d="m4 20 5-14 9 9-14 5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /><path d="m14 4 .6-2M19 8l2-1M17 3l1.5-1.5M11 4l-1-2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></>,
    whatsapp: <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.896.756 5.726 2.194 8.215L0 32l7.604-2.168a15.944 15.944 0 008.396 2.354c8.836 0 16-7.164 16-16S24.836.396 16 .396zm0 29.25a13.1 13.1 0 01-6.676-1.832l-.478-.284-4.512 1.288 1.208-4.404-.312-.454A13.07 13.07 0 012.75 16.396C2.75 9.12 8.724 3.146 16 3.146s13.25 5.974 13.25 13.25S23.276 29.646 16 29.646zm7.396-9.812c-.404-.202-2.394-1.18-2.766-1.314-.372-.134-.642-.202-.912.202-.27.404-1.046 1.314-1.284 1.584-.238.27-.476.304-.88.102-.404-.202-1.704-.628-3.248-2.002-1.202-1.07-2.014-2.392-2.252-2.796-.238-.404-.026-.622.176-.824.182-.182.404-.476.606-.714.202-.238.27-.404.404-.674.134-.27.067-.506-.034-.708-.102-.202-.912-2.202-1.248-3.014-.328-.788-.66-.68-.912-.694-.238-.012-.506-.014-.774-.014-.27 0-.708.102-1.078.506-.372.404-1.414 1.382-1.414 3.366 0 1.984 1.446 3.9 1.648 4.17.202.27 2.85 4.354 6.908 6.104.966.416 1.72.664 2.306.85.968.308 1.85.264 2.546.16.776-.116 2.394-.978 2.732-1.924.338-.946.338-1.756.236-1.924-.102-.168-.372-.27-.776-.472Z" />,
    parking: <><rect x="4" y="3" width="16" height="18" rx="3" stroke="currentColor" strokeWidth="1.7" /><path d="M9 17V7h4a3 3 0 0 1 0 6H9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></>,
    bath: <path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3Zm2 0V7a3 3 0 0 1 3-3c1.7 0 3 1.3 3 3M7 19v2M17 19v2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />,
    grill: <><path d="M5 10h14a7 7 0 0 1-14 0Zm7 7v4M8 21h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /><path d="M9 6c0-1 1-1.3 1-2.3M14 6c0-1 1-1.3 1-2.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></>,
    arrow: <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />,
  };

  return <svg {...common} viewBox={name === "whatsapp" ? "0 0 32 32" : "0 0 24 24"} fill={name === "whatsapp" ? "currentColor" : "none"}>{paths[name]}</svg>;
}

const structureItems = [
  ["home", "Salão de cultos para até 150 pessoas"],
  ["bath", "Dormitórios para 10 e 16 pessoas, com banheiros internos e chuveiros a gás"],
  ["grill", "Alimentação inclusa e cozinha de apoio"],
  ["users", "Piscinas para lazer e integração"],
  ["party", "Campo de futebol e quadra de vôlei"],
  ["check", "Quiosque com mesas de jogos (sinuca, pingue-pongue e fla-flu)"],
  ["shield", "Espaço especial para fogueira e momentos de comunhão"],
  ["leaf", "Ampla área verde em meio à natureza e estacionamento no local"],
] as const;

const steps = [
  ["whatsapp", "1. Entre em contato", "Fale conosco pelo WhatsApp e informe a data desejada e o número aproximado de participantes."],
  ["calendar", "2. Consulte a disponibilidade", "Verificamos as datas disponíveis e enviamos todas as informações sobre a estrutura, alimentação e condições da reserva."],
  ["check", "3. Confirme sua reserva", "Após definir todos os detalhes, realizamos a reserva da data e prestamos todo o suporte necessário para a organização do retiro."],
  ["party", "4. Viva dias inesquecíveis", "Chegue ao Sítio Emanuel Retiros e desfrute de um ambiente preparado para que sua igreja viva momentos de comunhão, renovação espiritual e encontro com Deus."],
] as const;

const benefits = [
  ["users", "Exclusivo para igrejas evangélicas", "Um espaço dedicado exclusivamente à realização de retiros cristãos, proporcionando um ambiente de comunhão, paz e crescimento espiritual."],
  ["home", "Estrutura completa", "Salão de cultos para até 150 pessoas, dormitórios para 134 hóspedes, alimentação inclusa e toda a infraestrutura necessária para o seu retiro."],
  ["bath", "Conforto para todos", "Dormitórios para 10 e 16 pessoas, com banheiros internos e chuveiros a gás, oferecendo mais conforto durante toda a estadia."],
  ["party", "Lazer e integração", "Piscinas, campo de futebol, quadra de vôlei, quiosque com sinuca, pingue-pongue e fla-flu, além de um aconchegante espaço para fogueira."],
  ["map", "Localização privilegiada", "Em Gravataí/RS, cercado pela natureza e com fácil acesso para toda a Região Metropolitana."],
] as const;

const reviews = [
  {
    name: "Malu",
    rating: 4,
    text: "Lugar lindo, aconchegante. Ótimo para retiros, reuniões especiais, bom atendimento e bons alojamentos.",
    href: "https://share.google/JVthegLrnfq2jgCLw",
  },
  {
    name: "André Cunha",
    rating: 5,
    text: "Simplesmente maravilhoso. Com certeza Jesus se faz presente neste lugar!",
    href: "https://share.google/gMPxT3wgDXf8IXMH2",
  },
] as const;

function SectionTag({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`text-[11px] font-bold uppercase tracking-[0.16em] ${light ? "text-[#8bd66d]" : "text-[#409734]"}`}>{children}</p>;
}

function Stars({ rating }: { rating: number }) {
  return <div className="flex gap-0.5 text-[17px] text-[#f5ad16]" aria-label={`${rating} de 5 estrelas`}>{Array.from({ length: 5 }, (_, index) => <span key={index} className={index < rating ? "" : "text-slate-200"}>★</span>)}</div>;
}

export default function HomePage() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5551986129832";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent("Olá! Gostaria de consultar uma data para o retiro da nossa igreja no Sítio Emanuel.")}`;

  return (
    <main className="bg-white text-[#172019]">
      <section id="inicio" className="relative flex min-h-[700px] items-center overflow-hidden bg-[#102218] pt-20 lg:min-h-[780px]">
        <Image src="/fotos/1.jpeg" alt="Área de lazer e piscinas do Sítio Emanuel" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,18,11,.9)_0%,rgba(4,18,11,.72)_48%,rgba(4,18,11,.28)_80%,rgba(4,18,11,.18)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />

        <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 pb-24 pt-16 sm:px-8 lg:px-10">
          <div className="max-w-[760px]">
            <span className="inline-flex rounded-md border border-white/15 bg-[#163e24]/65 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white/90 backdrop-blur-sm">
              Retiros cristãos • Gravataí/RS
            </span>
            <h1 className="mt-5 text-[38px] font-bold leading-[1.06] tracking-[-0.04em] text-white sm:text-[52px] lg:text-[62px]">
              Um lugar de <span className="block text-[#68bd4f]">comunhão, renovação</span><span className="block">e encontro com Deus</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/82 sm:text-[17px]">
              Um espaço exclusivo para retiros de igrejas evangélicas, preparado para receber sua igreja com conforto, segurança e uma estrutura completa.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#54b744] px-6 text-sm font-bold text-white shadow-[0_12px_35px_rgba(50,150,55,.28)] transition hover:-translate-y-0.5 hover:bg-[#63c653]">
                <Icon name="whatsapp" className="h-5 w-5" /> Fale no WhatsApp
              </a>
              <a href="#estrutura" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/65 bg-black/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#17301f]">
                Conheça o espaço
              </a>
            </div>
          </div>
        </div>

        <svg className="absolute -bottom-px left-0 z-10 h-[70px] w-full text-white sm:h-[90px]" viewBox="0 0 1440 110" preserveAspectRatio="none" aria-hidden="true">
          <path fill="currentColor" d="M0 52c205 45 390 42 585 9 241-41 454-45 855 0v49H0V52Z" />
        </svg>
      </section>

      <section id="estrutura" className="scroll-mt-20 bg-white px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionTag>Estrutura completa</SectionTag>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.035em] text-[#172019] sm:text-[42px]">
              Tudo o que sua igreja precisa para um <span className="text-[#469b38]">retiro inesquecível</span>
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600">
              O Sítio Emanuel Retiros é um espaço exclusivo para retiros de igrejas evangélicas, oferecendo conforto, tranquilidade e uma estrutura completa para que sua igreja viva dias de comunhão, crescimento espiritual e momentos marcantes na presença de Deus.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {structureItems.map(([icon, label]) => (
                <div key={label} className="flex items-start gap-3 rounded-xl bg-[#f7faf6] p-3 text-sm font-medium leading-5 text-slate-700">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e7f4e2] text-[#489c3a]"><Icon name={icon} className="h-4 w-4" /></span>
                  <span className="pt-1">{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-8"><PhotoGallery /></div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[5, 6, 2, 3, 4, 1].map((photo, index) => (
              <div key={photo} className={`group relative overflow-hidden rounded-[16px] bg-slate-100 ${index === 0 ? "min-h-[250px] sm:min-h-[300px]" : "min-h-[180px] sm:min-h-[220px]"}`}>
                <Image src={`/fotos/${photo}.jpeg`} alt={`Estrutura do Sítio Emanuel - foto ${index + 1}`} fill sizes="(max-width: 640px) 50vw, 260px" className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="scroll-mt-20 border-y border-[#e8eee7] bg-[#f7faf6] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-[1180px] text-center">
          <SectionTag>Como funciona</SectionTag>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-[#172019] sm:text-[40px]">
            Planejar o retiro da sua igreja é <span className="text-[#4aa13c]">simples</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600">
            Nossa equipe acompanha você em cada etapa para que seu grupo tenha uma experiência tranquila, desde a reserva até a chegada ao Sítio Emanuel.
          </p>
          <div className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-8 hidden border-t border-dashed border-[#85bd79] lg:block" />
            {steps.map(([icon, title, text]) => (
              <article key={title} className="relative z-10 flex h-full flex-col items-center rounded-[18px] border border-[#e2ebe0] bg-white px-5 pb-6 pt-5 shadow-sm">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#b9dab2] bg-white text-[#4ca33d]"><Icon name={icon} className="h-7 w-7" /></span>
                <h3 className="mt-5 text-sm font-bold text-[#1c2820]">{title}</h3>
                <p className="mt-3 text-xs leading-5 text-slate-500">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#071a10] px-5 py-20 text-white sm:px-8">
        <Image src="/fotos/6.jpeg" alt="Natureza no Sítio Emanuel" fill sizes="100vw" className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,20,11,.97),rgba(3,25,13,.84),rgba(3,20,11,.95))]" />
        <div className="relative mx-auto max-w-[1180px] text-center">
          <SectionTag light>Por que escolher o Sítio Emanuel?</SectionTag>
          <h2 className="mx-auto mt-3 max-w-4xl text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-[40px]">
            Muito mais que um lugar. <span className="text-[#8bd66d]">Um ambiente preparado para viver a presença de Deus.</span>
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {benefits.map(([icon, title, text]) => (
              <article key={title} className="rounded-[18px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                <Icon name={icon} className="mx-auto h-10 w-10 text-[#68c254]" />
                <h3 className="mt-4 text-sm font-bold">{title}</h3>
                <p className="mt-3 text-xs leading-5 text-white/65">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="avaliacoes" className="scroll-mt-20 bg-white px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1180px] text-center">
          <SectionTag>Avaliações do Google</SectionTag>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-[#172019] sm:text-[40px]">
            O que nossos <span className="text-[#4aa13c]">visitantes</span> dizem
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500">Experiências reais de pessoas que já viveram momentos especiais no Sítio Emanuel.</p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-[1fr_1fr_.8fr]">
            {reviews.map((review) => (
              <article key={review.name} className="flex min-h-[230px] flex-col rounded-[18px] border border-slate-200 bg-white p-6 text-left shadow-[0_12px_35px_rgba(26,45,31,.06)]">
                <div className="flex items-start justify-between gap-4"><Stars rating={review.rating} /><span className="text-xl font-bold text-[#4285f4]">G</span></div>
                <blockquote className="mt-5 flex-1 text-sm leading-6 text-slate-600">“{review.text}”</blockquote>
                <div className="mt-5 flex items-center justify-between"><div><p className="text-sm font-bold text-[#172019]">{review.name}</p><p className="text-[11px] text-slate-400">Avaliação publicada no Google</p></div><a href={review.href} target="_blank" rel="noreferrer" className="text-xs font-bold text-[#489b3a]">Ver avaliação</a></div>
              </article>
            ))}
            <aside className="flex flex-col items-center justify-center rounded-[18px] bg-[#f4f8f2] p-7 text-center">
              <span className="text-5xl font-bold tracking-[-0.05em] text-[#172019]">4,9</span>
              <Stars rating={5} />
              <p className="mt-2 text-xs text-slate-500">Mais de 60 avaliações</p>
              <a href="https://share.google/1Tw9zT7p248iLoEYO" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#489b3a]">Ver todas no Google <Icon name="arrow" className="h-4 w-4" /></a>
            </aside>
          </div>
        </div>
      </section>

      <section id="localizacao" className="scroll-mt-20 bg-[#f7faf6] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-[1180px] gap-6 lg:grid-cols-[.72fr_1.15fr_.78fr] lg:items-stretch">
          <div className="flex flex-col justify-center">
            <SectionTag>Localização</SectionTag>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.035em] text-[#172019] sm:text-[38px]">Fácil de chegar, <span className="block text-[#4aa13c]">difícil querer ir embora.</span></h2>
            <p className="mt-5 text-sm leading-6 text-slate-600">O Sítio Emanuel fica em Gravataí/RS, em uma região tranquila e cercada pela natureza.</p>
            <a href="https://www.google.com/maps/search/?api=1&query=S%C3%ADtio+Emanuel+Retiros+Gravata%C3%AD" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-3 text-sm font-bold text-[#26382b]"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e7f4e2] text-[#4ca33d]"><Icon name="map" className="h-5 w-5" /></span>Gravataí, Rio Grande do Sul</a>
          </div>

          <div className="min-h-[330px] overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-sm">
            <iframe title="Localização do Sítio Emanuel" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.8661566685896!2d-50.96700012378962!3d-29.86813357501282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95190d11b273ac4d%3A0xecbc16d6da05b014!2sSitio%20Emanuel%20Retiros!5e0!3m2!1spt-BR!2sbr!4v1776280247918!5m2!1spt-BR!2sbr" loading="lazy" className="h-full min-h-[330px] w-full border-0" />
          </div>

          <aside id="contato" className="flex flex-col justify-center rounded-[18px] bg-[#092016] p-7 text-white shadow-[0_20px_50px_rgba(12,38,23,.18)]">
            <SectionTag light>Vamos conversar?</SectionTag>
            <h3 className="mt-3 text-2xl font-bold leading-tight">Fale direto no WhatsApp e garanta sua data!</h3>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#55b947] px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#65c857]"><Icon name="whatsapp" className="h-5 w-5" /> Fale no WhatsApp</a>
            <p className="mt-5 text-sm font-bold text-white">(51) 98612-9832</p>
            <p className="mt-1 text-xs text-white/55">Atendimento rápido e personalizado</p>
          </aside>
        </div>
      </section>

      <footer className="bg-[#07130d] px-5 py-8 text-white sm:px-8">
        <div className="mx-auto flex max-w-[1180px] flex-col items-center justify-between gap-5 sm:flex-row">
          <div className="relative h-12 w-24"><Image src="/logo-sitio-emanuel.png" alt="Sítio Emanuel" fill sizes="96px" className="object-contain object-left" /></div>
          <p className="text-[11px] text-white/45">© 2026 Sítio Emanuel. Todos os direitos reservados.</p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="text-[11px] font-semibold text-[#80d36e]">Gravataí/RS • Fale conosco</a>
        </div>
      </footer>
    </main>
  );
}

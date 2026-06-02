// Confirmar numero antes de publicar.
const WHATSAPP_NUMBER = "5511998713135";

const LOCATIONS = [
  {
    name: "Loja Ermelino Matarazzo",
    description: "Próximo/dentro da Estação Ermelino Matarazzo, antes da catraca. Confirmar endereço exato antes de publicar.",
    mapUrl: "#"
  },
  {
    name: "Loja 2",
    description: "Preencher endereço confirmado antes de publicar.",
    mapUrl: "#"
  },
  {
    name: "Loja 3",
    description: "Preencher endereço confirmado antes de publicar.",
    mapUrl: "#"
  }
];

const CONFIG = {
  brandName: "Gringo Louko Celulares",
  instagram: "https://www.instagram.com/gringo.celulares/",
  instagramHandle: "@gringo.celulares",
  whatsappNumber: WHATSAPP_NUMBER,
  region: "Ermelino Matarazzo, Zona Leste - SP",
  locations: LOCATIONS
};

const WHATSAPP_MESSAGES = {
  budget: "Olá, vim pelo site da Gringo Louko. Meu celular está com problema e queria fazer um orçamento.",
  delivery: "Olá, vim pelo site da Gringo Louko. Quero saber se vocês fazem retirada/entrega para consertar meu celular.",
  phones: "Olá, vim pelo site da Gringo Louko. Quero ver celulares disponíveis para compra/troca.",
  accessories: "Olá, vim pelo site da Gringo Louko. Quero consultar acessórios e películas."
};

const SERVICES = [
  { icon: "TELA", title: "Troca de tela", text: "Tela trincada, apagada ou com toque falhando? Chama para orçamento." },
  { icon: "BAT", title: "Troca de bateria", text: "Bateria viciada, descarregando rápido ou aparelho desligando sozinho." },
  { icon: "USB", title: "Conector de carga", text: "Não carrega direito? Avaliamos conector, cabo e entrada do aparelho." },
  { icon: "CAM", title: "Câmera e alto-falante", text: "Problemas em câmera, som, microfone e chamadas." },
  { icon: "CAP", title: "Película e capinha", text: "Proteção no ato para sair da loja com o celular blindado." },
  { icon: "IOS", title: "iPhone e Android", text: "Atendimento para modelos iPhone e Android, conforme avaliação." },
  { icon: "SHOP", title: "Venda de celulares", text: "Novos, seminovos, iPhones e Androids conforme estoque do dia." },
  { icon: "TROCA", title: "Compra/troca de usado", text: "Consulte possibilidades de troca, compra ou venda do seu aparelho." }
];

const DELIVERY_STEPS = [
  ["Você chama no WhatsApp", "Fala o que aconteceu e manda o modelo do aparelho."],
  ["Manda foto ou vídeo", "Mostra tela, bateria, conector ou o problema principal."],
  ["Combinamos o melhor jeito", "Loja, retirada ou entrega, conforme região e disponibilidade."],
  ["Seu celular volta pro corre", "Avaliamos, orçamos e agilizamos o conserto confirmado."]
];

const PHONES = [
  { icon: "iP", title: "iPhone seminovo", text: "Modelos revisados conforme disponibilidade do estoque." },
  { icon: "AND", title: "Android seminovo", text: "Aparelhos para quem quer trocar sem gastar demais." },
  { icon: "BOX", title: "iPhones lacrados", text: "Consulte entrada, valores e condições pelo WhatsApp." },
  { icon: "OK", title: "Aparelhos revisados", text: "Opções avaliadas pela loja antes da venda." },
  { icon: "$", title: "Troca com volta", text: "Veja possibilidade de pegar outro aparelho e acertar diferença." },
  { icon: "USO", title: "Venda do seu usado", text: "Fale com a loja para avaliar condição, modelo e interesse." }
];

const TRADE = [
  { icon: "AV", title: "Avaliação do usado", text: "Mande modelo, estado e fotos para uma primeira conversa." },
  { icon: "+$", title: "Troca com volta", text: "Combine possibilidades conforme estoque e condição do aparelho." },
  { icon: "REV", title: "Seminovos revisados", text: "Aparelhos para sair usando, conforme disponibilidade." },
  { icon: "IG", title: "Novidades no Instagram", text: "Acompanhe entradas, acessórios e promoções no perfil." }
];

const ACCESSORIES = [
  "Películas",
  "Capinhas",
  "Carregadores",
  "Cabos",
  "Fones",
  "Suportes",
  "Acessórios para iPhone",
  "Acessórios para Android"
];

// Conteudo editavel: substituir por avaliacoes reais quando tiver autorizacao.
const TESTIMONIALS = [
  "Troquei a tela no mesmo dia.",
  "Atendimento rápido e preço justo.",
  "Me salvaram quando achei que só ia resolver na segunda."
];

// Placeholders visuais de posts/reels. Substituir por embeds ou posts reais quando aprovado.
const REELS = [
  "Tela no corre",
  "Seminovos",
  "Acessórios",
  "Bastidores"
];

const PICKUP_AREAS = {
  ermelino: {
    label: "Ermelino Matarazzo",
    baseMinutes: 10
  },
  "ponte-rasa": {
    label: "Ponte Rasa",
    baseMinutes: 14
  },
  itaim: {
    label: "Itaim Paulista",
    baseMinutes: 18
  },
  penha: {
    label: "Penha / Cangaíba",
    baseMinutes: 16
  }
};

function whatsappLink(type = "budget") {
  const text = encodeURIComponent(WHATSAPP_MESSAGES[type] || WHATSAPP_MESSAGES.budget);
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${text}`;
}

function setConfigContent() {
  document.querySelectorAll("[data-brand-name]").forEach((element) => {
    element.textContent = CONFIG.brandName;
  });

  document.querySelectorAll("[data-region]").forEach((element) => {
    element.textContent = CONFIG.region;
  });

  document.querySelectorAll("[data-instagram]").forEach((element) => {
    element.href = CONFIG.instagram;
    element.textContent = element.textContent.includes("@") ? `Seguir ${CONFIG.instagramHandle}` : element.textContent;
  });

  document.querySelectorAll("[data-wa]").forEach((element) => {
    element.href = whatsappLink(element.dataset.wa);
  });
}

function cardTemplate(item, className = "service-card") {
  return `
    <article class="${className}">
      <span class="icon" aria-hidden="true">${item.icon}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <a class="mini-link" href="${whatsappLink(item.whatsappType || "budget")}" target="_blank" rel="noopener">Orçar no WhatsApp</a>
    </article>
  `;
}

function renderLists() {
  document.getElementById("services-grid").innerHTML = SERVICES.map((item) => cardTemplate(item)).join("");

  document.getElementById("delivery-steps").innerHTML = DELIVERY_STEPS.map(([title, text]) => `
    <li class="step-card">
      <div>
        <strong>${title}</strong>
        <span>${text}</span>
      </div>
    </li>
  `).join("");

  document.getElementById("phones-grid").innerHTML = PHONES.map((item) => cardTemplate({ ...item, whatsappType: "phones" }, "showcase-card")).join("");
  document.getElementById("trade-grid").innerHTML = TRADE.map((item) => cardTemplate({ ...item, whatsappType: "phones" }, "trade-card")).join("");

  document.getElementById("accessories-list").innerHTML = ACCESSORIES.map((item) => `
    <span class="accessory-pill">${item}</span>
  `).join("");

  document.getElementById("locations-grid").innerHTML = CONFIG.locations.map((location) => `
    <article class="location-card">
      <h3>${location.name}</h3>
      <p>${location.description}</p>
      <a class="mini-link" href="${location.mapUrl}" ${location.mapUrl === "#" ? "" : 'target="_blank" rel="noopener"'}>Como chegar</a>
    </article>
  `).join("");

  document.getElementById("reels-grid").innerHTML = REELS.map((item) => `
    <div class="reel-card">
      <span>${item}</span>
    </div>
  `).join("");

  document.getElementById("testimonials-grid").innerHTML = TESTIMONIALS.map((text) => `
    <article class="testimonial-card">
      <p>${text}</p>
    </article>
  `).join("");
}

function setupNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  const header = document.querySelector("[data-elevate]");

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    document.body.classList.toggle("menu-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  const elevate = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  elevate();
  window.addEventListener("scroll", elevate, { passive: true });
}

function setupRevealAnimation() {
  const sections = document.querySelectorAll(".section-reveal");

  if (!("IntersectionObserver" in window)) {
    sections.forEach((section) => section.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  sections.forEach((section) => observer.observe(section));
}

function setupPickupSimulator() {
  const areaSelect = document.getElementById("area-select");
  const distanceRange = document.getElementById("distance-range");
  const distanceLabel = document.getElementById("distance-label");
  const timeLabel = document.getElementById("time-label");
  const areaLabel = document.getElementById("area-label");

  if (!areaSelect || !distanceRange || !distanceLabel || !timeLabel || !areaLabel) {
    return;
  }

  const updateEstimate = () => {
    const distance = Number(distanceRange.value);
    const area = PICKUP_AREAS[areaSelect.value] || PICKUP_AREAS.ermelino;
    const minimum = area.baseMinutes + Math.round(distance * 2);
    const maximum = minimum + 10;

    distanceLabel.textContent = `${distance} km`;
    timeLabel.textContent = `${minimum}-${maximum} min`;
    areaLabel.textContent = `Retirada estimada em ${area.label}. Confirme disponibilidade pelo WhatsApp.`;
  };

  areaSelect.addEventListener("change", updateEstimate);
  distanceRange.addEventListener("input", updateEstimate);
  updateEstimate();
}

setConfigContent();
renderLists();
setupNavigation();
setupRevealAnimation();
setupPickupSimulator();

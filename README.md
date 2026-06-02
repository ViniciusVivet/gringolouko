# 📱 Gringo Louko Celulares

Landing page comercial da **Gringo Louko Celulares**, assistência técnica e loja de celulares em **Ermelino Matarazzo, Zona Leste de São Paulo**.

O projeto foi desenhado para uma operação local de alto giro: conserto rápido, orçamento pelo WhatsApp, acessórios, celulares novos/seminovos e a proposta de **delivery do celular quebrado**. A experiência é direta, responsiva e focada em conversão, sem depender de imagens externas obrigatórias.

## 🚀 Proposta

**Quebrou o celular? Chama o Gringo Louko.**

A página transforma uma loja popular de assistência técnica em um canal digital de captação, mantendo a energia de panfleto comercial forte, mas com acabamento de produto web profissional:

- CTA principal para orçamento no WhatsApp
- Fluxo dedicado para retirada/entrega de aparelho quebrado
- Vitrine editável de celulares novos e seminovos
- Seções para troca, compra e venda de usados
- Cards de serviços e acessórios com comunicação direta
- Estrutura pronta para múltiplas lojas sem inventar endereço

## 🧩 Stack

Projeto estático, leve e fácil de publicar:

- **HTML5** para estrutura semântica
- **CSS3** mobile-first, responsivo e performático
- **JavaScript puro** para renderizar configurações, cards e links dinâmicos
- **Vercel** como alvo de deploy estático

Não há build obrigatório, dependência de framework ou pipeline pesado. Isso reduz atrito de manutenção e deixa o site pronto para publicação rápida.

## 🎯 Estratégia de conversão

O funil é simples: tirar o cliente do aperto e levar para o WhatsApp.

Principais intenções atendidas:

- Orçamento de conserto
- Troca de tela
- Troca de bateria
- Delivery de celular quebrado
- Compra de celular novo ou seminovo
- Troca ou venda de aparelho usado
- Consulta de acessórios, películas, capinhas e carregadores

Os botões usam mensagens prontas via `wa.me`, geradas dinamicamente com `encodeURIComponent`, evitando links quebrados e facilitando ajuste de copy.

## ⚙️ Configuração editável

Os dados do negócio ficam centralizados em [`script.js`](./script.js):

```js
const WHATSAPP_NUMBER = "5511998713135";

const LOCATIONS = [
  {
    name: "Loja Ermelino Matarazzo",
    description: "Próximo/dentro da Estação Ermelino Matarazzo, antes da catraca. Confirmar endereço exato antes de publicar.",
    mapUrl: "#"
  }
];
```

⚠️ Antes de publicar:

- Confirmar o número de WhatsApp
- Confirmar endereço exato da unidade
- Atualizar links de mapa
- Substituir depoimentos neutros por avaliações reais autorizadas
- Trocar placeholders de Instagram por posts/reels reais, se desejado

## 🗂️ Estrutura

```txt
.
├── index.html      # Estrutura da landing page
├── style.css       # Visual, responsividade e animações
├── script.js       # CONFIG, listas editáveis e links dinâmicos
├── vercel.json     # Configuração simples para deploy estático
└── README.md       # Documentação do projeto
```

## 🟢 Deploy na Vercel

Como o projeto é estático, a publicação é direta:

1. Importar o repositório no painel da Vercel
2. Framework Preset: **Other**
3. Build Command: deixar vazio
4. Output Directory: deixar vazio ou usar a raiz do projeto
5. Publicar

O arquivo `vercel.json` mantém URLs limpas e aponta todas as rotas para `index.html`, útil para evitar 404 em navegação direta.

## 🧪 Validação local

Abra o arquivo [`index.html`](./index.html) no navegador.

Para validar o JavaScript:

```bash
node --check script.js
```

## 🧠 Direção visual

A interface combina:

- Preto, amarelo, vermelho e verde WhatsApp
- Cards com borda forte e sombra marcada
- Hero com mockup CSS de celular quebrado
- Selos comerciais e linguagem de loja local
- Animações leves para entrada, hover, CTA e glitch discreto

O objetivo não é parecer uma startup genérica. É parecer uma loja real, rápida, confiável e comercialmente agressiva na medida certa.

# 🎬 MovieCity — Landing Page de Filmes

Landing page responsiva de uma plataforma fictícia de streaming, desenvolvida como atividade prática com **React**, **Vite**, **JavaScript** e **CSS puro**.

O objetivo é praticar a criação de interfaces com componentes reutilizáveis, organização de arquivos, estilização e adaptação da página a diferentes tamanhos de tela.

## 📌 Funcionalidades

- Cabeçalho com logotipo **MovieCity**, links de navegação e botão **Login**.
- Área principal com o título **Seus Filmes**, texto de apresentação e botão **Mais**.
- Catálogo visual com seis pôsteres: **Afterlife**, **Transformers**, **Mowgli**, **Shift**, **Round 6 (Squid Game)** e **Harry Potter**.
- Layout responsivo para computadores, tablets e celulares.
- Menu hambúrguer em telas menores, com opção de abrir e fechar.
- Efeito de ampliação dos cards ao passar o mouse.

> **Observação:** o projeto é uma landing page demonstrativa. Os botões **Login** e **Mais**, assim como os links de navegação, não possuem fluxos completos de autenticação ou páginas específicas. Não há backend ou banco de dados.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Utilização |
| --- | --- |
| **React** | Construção da interface em componentes |
| **Vite** | Ambiente de desenvolvimento, build e preview |
| **JavaScript (JSX)** | Estrutura e comportamento dos componentes |
| **CSS puro** | Estilos, animações e responsividade |
| **ESLint** | Verificação estática do código |

O projeto foi criado com o template React do Vite, sem bibliotecas de estilização como Bootstrap ou Tailwind.

## ✅ Pré-requisitos

- **Node.js** compatível com a versão do Vite instalada (no roteiro da atividade: Node.js 20.19+ ou 22.12+ para Vite 7).
- **npm** (incluído na instalação do Node.js).
- Um editor de código, como **Visual Studio Code**.

Confira a instalação:

```bash
node -v
npm -v
```

## 🚀 Como executar localmente

1. Abra o terminal na **raiz do projeto** (a pasta que contém `package.json`).
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Abra o endereço mostrado no terminal, geralmente **http://localhost:5173/**.

O Vite atualiza a página automaticamente ao salvar alterações nos arquivos.

### Verificar e gerar a versão de produção

```bash
npm run lint
npm run build
npm run preview
```

- `npm run lint`: executa as verificações do ESLint.
- `npm run build`: gera a versão otimizada na pasta `dist/`.
- `npm run preview`: permite visualizar localmente a versão gerada; normalmente em **http://localhost:4173/**.

## 📁 Estrutura do projeto

```text
01_landinpage/
├── public/                  # Arquivos públicos do Vite
├── src/
│   ├── assets/              # Pôsteres dos filmes
│   │   ├── afterlife.jpg
│   │   ├── transformers.jpg
│   │   ├── mowgli.jpg
│   │   ├── shift.png
│   │   ├── squidgame.webp
│   │   └── harrypotter.jpg
│   ├── components/
│   │   ├── Header.jsx       # Cabeçalho, links e menu hambúrguer
│   │   ├── Home.jsx         # Agrupa Header e Main
│   │   └── Main.jsx         # Apresentação e cards de filmes
│   ├── App.jsx              # Renderiza o componente Home
│   ├── index.css            # Estilos globais e responsividade
│   └── main.jsx             # Ponto de entrada do React
├── index.html               # Documento HTML principal
├── eslint.config.js         # Configuração do ESLint
├── package.json             # Dependências e scripts
├── package-lock.json        # Registro das versões instaladas
├── vite.config.js           # Configuração do Vite
└── README.md                # Documentação do projeto
```

> O template Vite pode manter arquivos extras, como `App.css`, `react.svg` ou `vite.svg`, mesmo que não sejam utilizados na interface.

## 🧩 Organização dos componentes

O fluxo principal de renderização é:

```text
index.html
    ↓
main.jsx
    ↓
App.jsx
    ↓
Home.jsx
    ├── Header.jsx
    └── Main.jsx
```

### `Header.jsx`

Exibe o nome da plataforma, os links **Filmes**, **Categoria**, **Sobre** e **Contato**, além do botão **Login**. Em telas menores, o menu de links pode ser aberto e fechado por um botão hambúrguer. O React usa o hook `useState` para controlar o estado do menu e `map()` para renderizar os links definidos em um array.

### `Main.jsx`

Contém a seção de apresentação, o botão **Mais** e os seis cards dos filmes. Cada card recebe uma classe CSS própria (`card1` até `card6`), que determina qual imagem será exibida como plano de fundo.

### `Home.jsx`

É o componente que organiza a página, reunindo o cabeçalho e o conteúdo principal.

### `App.jsx` e `main.jsx`

O `App.jsx` carrega os estilos globais e renderiza o `Home`. O `main.jsx` conecta o React ao elemento raiz definido no `index.html`.

## 🎨 Estilização

O arquivo `src/index.css` centraliza a apresentação visual da página:

- **Flexbox** para organizar o cabeçalho e o conteúdo principal.
- **CSS Grid** para distribuir os pôsteres em linhas e colunas.
- **`background-image`** para exibir as imagens locais dos cards.
- **`transition` e `:hover`** para efeitos visuais nos cards e botões.
- **Media queries** para adaptar o layout conforme a largura da tela.

A identidade visual utiliza fundo escuro, textos claros e detalhes em vermelho.

## 📱 Responsividade

A interface contém ajustes para diferentes larguras de tela:

| Largura | Comportamento esperado |
| --- | --- |
| **Acima de 1100px** | Cabeçalho completo, conteúdo em duas áreas e cards em três colunas |
| **Até 1100px** | Redução de espaçamentos e tamanhos de texto/cards |
| **Até 900px** | Conteúdo empilhado e navegação substituída pelo menu hambúrguer |
| **Até 600px** | Cards organizados em duas colunas e textos menores |
| **Até 380px** | Ajustes adicionais para celulares pequenos |

### Como testar

1. Abra a página no navegador.
2. Pressione **F12** para abrir as ferramentas de desenvolvedor.
3. Ative o modo de dispositivo com **Ctrl + Shift + M**.
4. Teste larguras como **1440px, 1024px, 768px, 600px e 375px**.
5. Verifique a organização dos cards, o menu hambúrguer e a ausência de rolagem horizontal.

## 🧪 Testes realizados

Durante o desenvolvimento foram verificados:

- Inicialização do projeto com o servidor Vite.
- Renderização dos componentes React.
- Carregamento dos seis pôsteres.
- Exibição do menu hambúrguer em tela reduzida.
- Geração e visualização da versão de produção (`build` e `preview`).
- Execução do ESLint sem erros reportados.

## 📦 Entrega do projeto

Para compartilhar o código-fonte, mantenha os arquivos do projeto, incluindo `src/`, `public/`, `index.html`, `package.json`, `package-lock.json` e os arquivos de configuração. A pasta `node_modules/` não precisa ser enviada: quem receber o projeto poderá instalar as dependências usando `npm install`.

A pasta `dist/` contém os arquivos compilados para publicação e pode ser gerada novamente com `npm run build`.

## 💡 Possíveis melhorias futuras

- Criar páginas reais para Login, Sobre, Categorias e Contato.
- Transformar os cards em elementos clicáveis com informações sobre cada filme.
- Renderizar os filmes a partir de um array de objetos usando `map()`.
- Integrar uma API de filmes.
- Aprimorar a acessibilidade dos cards e reduzir animações conforme a preferência do usuário.

---

**Projeto educacional:** MovieCity — atividade prática de desenvolvimento de interface com React + Vite.

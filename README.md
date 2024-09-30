# Rick and Morty Character Explorer

Este projeto é uma aplicação em React que consome a [API de Rick and Morty](https://rickandmortyapi.com/) para exibir uma lista paginada de personagens. Ele utiliza **Styled Components** para a estilização e **Vite** como ferramenta de build. O projeto permite explorar a lista de personagens com a funcionalidade de "Carregar mais" e exibe informações detalhadas como nome, espécie, gênero e imagem.

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)


## Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

- [React](https://reactjs.org/)
- [Styled Components](https://styled-components.com/) para CSS-in-JS
- [Axios](https://axios-http.com/) para requisições HTTP
- [Vite](https://vitejs.dev/) para desenvolvimento e build
- [ESLint](https://eslint.org/) para padronização de código
- [Rick and Morty API](https://rickandmortyapi.com/)

## Funcionalidades

- **Listagem de personagens:** Exibe uma lista paginada de personagens de Rick and Morty consumidos da API.
- **Paginação e Carregar Mais:** Os personagens são carregados em páginas e o botão "Carregar mais" permite que o usuário carregue mais personagens até o fim da lista.
- **Exibição de detalhes:** Mostra informações detalhadas dos personagens, como nome, espécie, gênero e imagem.
- **Contagem dinâmica de personagens:** O número total de personagens é exibido dinamicamente no cabeçalho.
- **Styled Components:** Utiliza CSS-in-JS para estilização, facilitando o encapsulamento de estilos por componente.

## Instalação

### Pré-requisitos

Antes de começar, certifique-se de ter o [Node.js](https://nodejs.org/en/) instalado na sua máquina.

### Passos

1. Clone o repositório:

   ```bash
   git clone https://github.com/Gab-pereir/Codeboost-Rick-and-Morty.git
   cd Codeboost-Rick-and-Morty
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse a aplicação no navegador através da URL:

   ```
   http://localhost:3000
   ```

## Uso

Assim que a aplicação estiver rodando, você verá uma lista de personagens de Rick and Morty na tela principal. O usuário pode carregar mais personagens através do botão **"Carregar mais"**. Além disso, o número total de personagens será exibido dinamicamente no cabeçalho.

## Estrutura do Projeto

Aqui está uma visão geral da estrutura de pastas do projeto (conforme mostrada):

```
rick-and-morty-character-explorer/
├── node_modules/                    # Dependências instaladas
├── src/
│   ├── Components/                  # Componentes do projeto
│   │   ├── Application/
│   │   │   ├── index.jsx            # Componente Application
│   │   │   └── styles.jsx           # Estilos com Styled Components
│   │   ├── CardCharacter/
│   │   │   ├── index.jsx            # Componente de Card de Personagem
│   │   │   └── styles.js            # Estilos do Card
│   ├── styles/                      # Estilos globais e outros
│   │   └── global.js                # Estilos globais com Styled Components
│   ├── App.jsx                      # Componente raiz
│   ├── main.jsx                     # Ponto de entrada da aplicação
├── public/                          # Arquivos estáticos
├── .gitignore                       # Arquivo de exclusões para Git
├── eslint.config.js                 # Configurações do ESLint
├── vite.config.js                   # Configurações do Vite
├── package.json                     # Configurações do projeto e scripts
└── README.md                        # Documentação
```





<h1>DevBurger 🍔 Interface</h1>
<br>
Este repositório contém o código da interface da DevBurger, uma aplicação web que permite aos usuários visualizar e fazer pedidos de hambúrgueres de forma intuitiva e prática. A interface foi projetada para funcionar em conjunto com a DevBurger API.
</br>

<br>
Índice
Visão Geral
Tecnologias Utilizadas
Instalação e Configuração
Funcionalidades
Uso da Aplicação
Contribuição
Licença
</br>
<br>
Visão Geral
A DevBurger Interface foi desenvolvida para oferecer uma experiência de usuário amigável, onde é possível explorar o menu, fazer pedidos, e realizar pagamentos de forma segura. A interface é responsiva, garantindo uma navegação eficiente tanto em dispositivos móveis quanto em desktops.
</br>

<br>

Tecnologias Utilizadas:
<br>
React.js: Biblioteca para construção da interface de usuário.
Axios: Cliente HTTP para comunicação com a API.
React Router: Para navegação entre as diferentes páginas da aplicação.

</br>
<br>
<h1>Instalação e Configuração</h1>
Clone o repositório:
bash
Copiar código
git clone https://github.com/mariadeb28/devburger-interface.git
cd devburger-interface
</br>

<br>
<h1>Instale as dependências:</h1>
bash
Copiar código
npm install
</br>

<br>
<h1>Crie um arquivo .env na raiz do projeto e defina a URL da API:</h1>
env
Copiar código
REACT_APP_API_URL=https://sua-api-url.com
</br>

Inicie o servidor de desenvolvimento:
bash
Copiar código
npm start
</br>
<br>
Funcionalidades
Visualização de Produtos: Os usuários podem navegar pelo cardápio e ver detalhes de cada item.
Gestão de Pedidos: Adicione produtos ao carrinho e gerencie os itens antes de finalizar a compra.
Pagamento Integrado: Utilize a integração com a API do Stripe para realizar pagamentos.
</br>
<br>
Uso da Aplicação
Após iniciar o servidor de desenvolvimento, a aplicação estará disponível em http://localhost:3000. Navegue pelas páginas para explorar o menu, adicione itens ao carrinho e simule uma compra para testar a integração de pagamento.
</br>

Estrutura de Pastas
plaintext
Copiar código
src/
|-- components/        # Componentes reutilizáveis da interface
|-- pages/             # Páginas da aplicação (ex: Home, Checkout)
|-- services/          # Serviços para comunicação com a API
|-- styles/            # Arquivos de estilo (Tailwind CSS e personalizados)
|-- App.js             # Componente principal
|-- index.js           # Ponto de entrada da aplicação
Contribuição
Contribuições são bem-vindas! Siga os passos para fazer um fork deste repositório, crie uma branch com suas alterações e envie um pull request com uma descrição clara das mudanças.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

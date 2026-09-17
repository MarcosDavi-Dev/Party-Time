# 🎉 Party Time!

Aplicação fullstack para organizar e gerenciar festas: defina um orçamento, escolha serviços (buffet, decoração, música, etc.) e acompanhe tudo em um só lugar.

## 📋 Sobre o projeto

O **Party Time!** permite:

- Criar festas informando nome, anfitrião, descrição, orçamento e imagem;
- Vincular serviços contratados a cada festa (nome, descrição, preço e imagem);
- Listar todas as festas cadastradas;
- Visualizar detalhes de uma festa específica, incluindo os serviços contratados;
- Editar e excluir festas.

## 🚀 Tecnologias utilizadas

**Front-end**
- React
- React Router DOM
- Axios

**Back-end**
- Node.js
- Express
- Mongoose

**Banco de dados**
- MongoDB Atlas (online)

## 📁 Estrutura do projeto

```
party-time/
├── backend/
│   ├── models/
│   │   ├── Party.js
│   │   └── Service.js
│   ├── routes/
│   ├── server.js
│   └── .env
└── frontend/
    ├── src/
    │   ├── axios/
    │   │   └── config.js
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── CreateParty.jsx
    │   │   └── Party.jsx
    │   └── App.jsx
    └── package.json
```

> Ajuste essa árvore conforme a organização real das suas pastas.

## ⚙️ Como rodar o projeto localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- Uma conta no [MongoDB Atlas](https://www.mongodb.com/atlas) (ou MongoDB local)

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/party-time.git
cd party-time
```

### 2. Configurando o back-end

```bash
cd backend
npm install
```

Crie um arquivo `.env` na pasta `backend` com as seguintes variáveis:

```env
MONGO_URI=sua_string_de_conexao_do_mongodb
PORT=3000
```

Inicie o servidor:

```bash
npm run dev
```

O back-end estará rodando em `http://localhost:3000`.

### 3. Configurando o front-end

Em outro terminal:

```bash
cd frontend
npm install
npm run dev
```

O front-end estará disponível em `http://localhost:5173` (ou a porta indicada pelo terminal, caso esteja usando Vite).

## 🔌 Rotas da API

### Festas (`/api/parties`)

| Método | Rota                  | Descrição                          |
|--------|------------------------|-------------------------------------|
| GET    | `/api/parties`         | Lista todas as festas               |
| GET    | `/api/parties/:id`     | Retorna os detalhes de uma festa    |
| POST   | `/api/parties`         | Cria uma nova festa                 |
| PUT    | `/api/parties/:id`     | Atualiza uma festa existente        |
| DELETE | `/api/parties/:id`     | Remove uma festa                    |

### Serviços (`/api/services`)

| Método | Rota                    | Descrição                        |
|--------|--------------------------|------------------------------------|
| GET    | `/api/services`         | Lista todos os serviços disponíveis |

### Exemplo de corpo para criar uma festa (POST)

```json
{
  "title": "Aniversário de 30 anos",
  "author": "Davi",
  "description": "Festa surpresa para comemorar os 30 anos",
  "budget": 8000,
  "image": "https://exemplo.com/imagem-da-festa.jpg",
  "services": [
    {
      "name": "Buffet completo",
      "description": "Buffet para 50 convidados",
      "price": 3000,
      "image": "https://exemplo.com/imagem-do-servico.jpg"
    }
  ]
}
```

## 🖼️ Screenshots

> Adicione aqui algumas capturas de tela do projeto em funcionamento (Home, Criar Festa, Detalhes da Festa).

## 🛠️ Possíveis melhorias futuras

- [ ] Upload de imagens direto pelo formulário (em vez de URL manual)
- [ ] Autenticação de usuários
- [ ] Edição de festas pelo front-end
- [ ] Filtro de festas por orçamento ou serviços

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar.

## 👤 Autor

Feito por **Davi**.

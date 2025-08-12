# 🏎️ API de Equipes e Pilotos de Fórmula 1

Este projeto é uma **API simples** construída com **Fastify** para gerenciar dados fictícios de **equipes** e **pilotos** de Fórmula 1.  
A API disponibiliza endpoints para listar equipes, listar pilotos e buscar um piloto específico pelo ID.

---

## 📋 Tecnologias Utilizadas

- [Fastify](https://fastify.dev/) — Framework rápido e eficiente para criação de APIs Node.js.
- [@fastify/cors](https://github.com/fastify/fastify-cors) — Plugin para habilitar CORS.
- **TypeScript** — Tipagem estática para maior segurança e clareza no código.

---

## 📂 Estrutura do Projeto

```
.
├── src/
│   └── server.ts     # Arquivo principal da aplicação
├── package.json
└── tsconfig.json
```

---

## 🚀 Como Executar o Projeto

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/seu-usuario/f1-api.git
cd f1-api
```

### 2️⃣ Instalar dependências
```bash
npm install
```

### 3️⃣ Executar o servidor
Se estiver usando **TypeScript** diretamente com ts-node:
```bash
npx ts-node src/server.ts
```
Ou se estiver usando build para JavaScript:
```bash
npm run build
npm start
```

O servidor será iniciado na porta **3333**.

---

## 📌 Endpoints Disponíveis

### **1. Listar Equipes**
```
GET /teams
```
**Resposta de Exemplo**
```json
{
  "teams": [
    { "id": 1, "name": "Ferrari", "base": "Maranello - Italy" },
    { "id": 2, "name": "Mercedes", "base": "Brackley - United Kingdom" },
    { "id": 3, "name": "Red Bull Racing", "base": "Milton Keynes - United Kingdom" }
  ]
}
```

---

### **2. Listar Pilotos**
```
GET /drivers
```
**Resposta de Exemplo**
```json
{
  "drivers": [
    { "id": 1, "name": "Max Verstappen", "team": "Red Bull Racing" },
    { "id": 2, "name": "Lewis Hamilton", "team": "Ferrari" },
    { "id": 3, "name": "Lando Norris", "team": "Mercedes" }
  ]
}
```

---

### **3. Buscar Piloto por ID**
```
GET /drivers/:id
```
**Exemplo**
```
GET /drivers/1
```
**Resposta de Sucesso**
```json
{
  "driverById": { "id": 1, "name": "Max Verstappen", "team": "Red Bull Racing" }
}
```
**Resposta de Erro**
```json
{
  "message": "Driver Not Found"
}
```

---

## ⚠️ Observações

- O projeto utiliza **CORS liberado** (`origin: "*"`) para facilitar testes.
- Os dados de equipes e pilotos são **estáticos** e armazenados em arrays dentro do código.

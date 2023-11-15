#!/bin/bash

cd app

# Exibir a versão do Node.js
node --version

# Instalar as dependências do Node.js
npm install

# Executar os testes usando Jest
npx jest --forceExit

# Comando para iniciar o aplicativo Node.js
node index.js
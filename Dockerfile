

# Use a imagem oficial do Ubuntu 22.04 como base
FROM ubuntu:22.04

# Fornecendo permissão de root para instalarmos algumas dependências
USER root

# Ressincronizando arquivos do índice de pacotes e instalando pacotes necessários para instalar o 
# CLI do docker
RUN apt-get update && apt-get upgrade -y

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie os arquivos necessários para o diretório de trabalho
RUN apt install git -y

RUN git clone https://github.com/jhonatanfariasdelima/TDE-devsecops.git

# Instale as dependências do aplicativo
RUN apt-get install curl -y
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x -o setup_lts.x
RUN bash setup_lts.x && apt-get install -y nodejs

# Exponha a porta que o aplicativo irá utilizar
EXPOSE 8888

# Comando para executar o aplicativo quando o contêiner for iniciado
RUN cd TDE-devsecops && npm install
#RUN cd TDE-devsecops && node index.js
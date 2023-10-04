# Use a imagem base do Ubuntu 20.04
FROM ubuntu

# Atualize os pacotes do sistema
RUN apt-get update

# Instale o Curl                
RUN apt-get install -y curl

# # Instale o Node.js e o npm
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x -o setup_lts.x
RUN bash setup_lts.x
RUN apt-get install -y nodejs

# # Verifique a versão do Node.js
RUN node --version


# # Defina a senha do root para o MySQL (altere-a para uma senha segura)
# RUN echo "mysql-server mysql-server/root_password password senha_segura" | debconf-set-selections
# RUN echo "mysql-server mysql-server/root_password_again password senha_segura" | debconf-set-selections


# # # Aguarde o MySQL iniciar (espere alguns segundos)
# # RUN sleep 5

# # # Crie um banco de dados chamado "banco" no MySQL
# #RUN mysql -u root -e "USE mysql; UPDATE user SET plugin='mysql_native_password' WHERE User='root'; FLUSH PRIVILEGES;"
# #RUN mysql -u root -e "CREATE DATABASE banco;"


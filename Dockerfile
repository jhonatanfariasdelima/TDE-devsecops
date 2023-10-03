# Use a imagem base do Ubuntu 20.04
FROM ubuntu:latest


# Atualize os pacotes do sistema
RUN apt-get update && apt-get -y upgrade

# Instale o servidor MySQL e outras dependências
RUN apt-get -y install mysql-server

# Copie seu arquivo de configuração personalizado, se necessário
# COPY my.cnf /etc/mysql/my.cnf

# # Defina a senha do root para o MySQL (altere-a para uma senha segura)
# RUN echo "mysql-server mysql-server/root_password password senha_segura" | debconf-set-selections
# RUN echo "mysql-server mysql-server/root_password_again password senha_segura" | debconf-set-selections

# Inicialize o serviço MySQL
RUN service mysql start
RUN sleep 30
RUN service mysql status




# # Use the official Ubuntu as the base image
# FROM ubuntu:latest


# # Use a imagem oficial do Ubuntu como base
# FROM ubuntu:latest

# # Use a imagem oficial do Ubuntu como base
# FROM ubuntu:latest

# # Atualize os repositórios e instale o MySQL Server
# RUN apt-get update && \
#     DEBIAN_FRONTEND=noninteractive apt-get install -y mysql-server && \
#     apt-get clean

# # Inicialize o MySQL Server
# CMD ["mysqld", "--user=mysql", "--console"]

# # Verifique o status do MySQL após o contêiner ser iniciado
# RUN service mysql status



# # Atualize os repositórios
# RUN apt-get update 

# # Instale o MySQL Server e inicie-o
# RUN apt-get install -y mysql-server
# RUN sleep 20

# # CMD ["service", "mysql", "start"]
# RUN service mysql start
# # CMD ["mysqld"]

# # # Verifique o status do MySQL
# RUN sleep 20
#RUN service mysql status

# # # Aguarde o MySQL iniciar (espere alguns segundos)
# # RUN sleep 5

# # # Crie um banco de dados chamado "banco" no MySQL
# #RUN mysql -u root -e "USE mysql; UPDATE user SET plugin='mysql_native_password' WHERE User='root'; FLUSH PRIVILEGES;"
# #RUN mysql -u root -e "CREATE DATABASE banco;"


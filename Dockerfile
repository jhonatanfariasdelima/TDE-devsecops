# Use the official Ubuntu as the base image
FROM ubuntu:latest


# Use a imagem oficial do Ubuntu como base
FROM ubuntu:latest

# Use a imagem oficial do Ubuntu como base
FROM ubuntu:latest

# Atualize os repositórios e instale o MySQL Server
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y mysql-server && \
    apt-get clean

# Inicialize o MySQL Server
CMD ["mysqld", "--user=mysql", "--console"]

# Verifique o status do MySQL após o contêiner ser iniciado
RUN service mysql status



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


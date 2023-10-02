pipeline {
    agent {
        docker {
            image 'ubuntu' // Escolha a versão desejada
            args '-u root' // Executa como root para instalar pacotes
        }
    }

    stages {
        // Defina suas etapas aqui
        stage('dependencias') {
            steps {
                sh 'apt update'
                sh 'apt-get install -y curl'
                sh 'curl -fsSL https://deb.nodesource.com/setup_lts.x -o setup_lts.x'
                sh 'bash setup_lts.x'
                sh 'apt-get install -y nodejs'
                sh 'node --version'
                sh 'apt install -y mysql-server'
                sh 'systemctl start mysql'
                sh 'systemctl status mysql'
                sh 'mysql -h 127.0.0.1 -P 3306 -u root -e "CREATE DATABASE banco;"'

            }
        }

        stage('Checkout') {
            steps {
                // Checkout do código-fonte do repositório
                checkout scm
            }
        }

        stage('Preparar Ambiente') {
            steps {
                sh 'npm install'
            }
        }

        stage('Testes Unitários') {
            steps {
                
                // Executa os testes (substitua este comando pelo seu próprio)
                sh 'npm run test'
                
            }
        }
    }

    post {
        success {
            // Ação a ser executada quando o pipeline for bem-sucedido
            echo 'Pipeline executado com sucesso!'
        }

        failure {
            // Ação a ser executada quando o pipeline falhar
            echo 'Pipeline falhou!'
        }
    }
}



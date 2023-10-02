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
                sh 'sudo apt-get install curl'
                sh 'curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -'
                sh 'sudo apt-get install -y nodejs'
                sh 'node --version'
                sh 'sudo apt install mysql-server'
                sh 'sudo systemctl start mysql'
                sh 'sudo systemctl status mysql'
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



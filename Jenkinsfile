pipeline {
    agent {
        docker {
            image 'node:14' // Escolha a versão desejada
        }
    }

    stages {
        // Defina suas etapas aqui
        stage('build') {
            steps {
                sh 'node --version'
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



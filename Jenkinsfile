pipeline {
    agent any

    stages {
        // Defina suas etapas aqui
        stage('build') {
            steps {
                sh 'sudo apt-get install curl'
                sh 'curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -'
                sh 'sudo apt-get install -y nodejs'
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
                script {
                    // Instalação das dependências Node.js
                    def npmInstallation = tool name: 'npm', type: 'ToolInstallation'
                    withEnv(["PATH+NODEJS=$npmInstallation/bin"]) {
                        sh 'npm install'
                    }
                }
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



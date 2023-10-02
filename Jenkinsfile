pipeline {
    agent any

    environment {
        // Defina as variáveis de ambiente para o Node.js e npm
        NODEJS_HOME = tool name: 'NodeJS', type: 'ToolInstallation'
        PATH = "$NODEJS_HOME/bin:$PATH"
    }

    stages {
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
                try {
                    // Executa os testes (substitua este comando pelo seu próprio)
                    sh 'npm run test'
                } catch (Exception e) {
                    currentBuild.result = 'FAILURE'
                    error("Erro nos testes unitários: ${e.message}")
                }
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

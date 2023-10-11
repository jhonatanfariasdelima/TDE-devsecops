pipeline {
    agent any

    stages {
        stage('dependencias') {
            steps {
                sh 'node --version'
                sh 'npm --version'
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
                // Inicia o projeto node
                sh 'npm install'
            }
        }

        stage('Gerenciamento de segredos'){
            steps{
                script {
                    // Busca e define a variavel de ambiente do Jenkins
                    def minhaVariavel = env.MYSQL
                        sh 'export MYSQL=${minhaVariavel}'
                }
            }
        }

        stage('Análise de Dependências') {
            steps {
                // Executa a verificação de segurança com o npm audit
                sh 'npm audit || true'
            }
        }

        stage('SAST') {
            steps {
                sh 'horusec start -p ./ -D'
            }
        }

        stage('DAST'){
            steps {
                sh 'node index.js &'
                sh 'wget http://localhost:8888'
                

            }
        }

        stage('Testes Unitários') {
            steps {
                // Executa os testes unitários
                sh 'npm run test --forceExit'
                
            }
        }

    }

    post {
        success {
            // Pipeline for bem-sucedido
            echo 'Pipeline executado com sucesso!'
        }

        failure {
            // Pipeline falha
            echo 'Pipeline falhou!'
        }
    }
}



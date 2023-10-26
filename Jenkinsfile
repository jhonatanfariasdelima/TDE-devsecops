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
                sh 'sleep 20'
                sh 'horusec start -p ./ -D'
            }
        }

        
        stage('Testes Unitários') {
            steps {
                // Executa os testes unitários
                sh 'npx jest --forceExit'
            }
        }

        stage('DAST'){
            steps {
                sh 'node index.js &'
                sh 'sleep 20'
                sh 'nikto -h http://localhost:8888/'
            }
        }

        // stage(''){
        //     steps{
                
        //     }
        // }

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



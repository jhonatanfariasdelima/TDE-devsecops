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

        stage('Testes Unitários') {
            steps {
                // Executa os testes unitários
                sh 'npm run test'
                
            }
        }

        stage('Análise de Dependências') {
            steps {
                // Executa a verificação de segurança com o npm audit
                script {            
                    def auditOutput = sh(script: 'npm audit --json', returnStdout: true).trim()
                    def auditJson = readJSON(text: auditOutput)          
                    // Verifica se há vulnerabilidades
                    def vulnerabilities = auditJson.metadata.vulnerabilities
                    def criticalVulnerabilities = vulnerabilities.critical
                    def highVulnerabilities = vulnerabilities.high
                    def mediumVulnerabilities = vulnerabilities.medium
                    def lowVulnerabilities = vulnerabilities.low
                    echo "Vulnerabilidades Críticas: ${criticalVulnerabilities}"
                    echo "Vulnerabilidades Altas: ${highVulnerabilities}"
                    echo "Vulnerabilidades Médias: ${mediumVulnerabilities}"
                    echo "Vulnerabilidades Baixas: ${lowVulnerabilities}"
                }
            }
        }

        stage('SAST') {
            steps {
                sh 'horusec start -p ./ -D'
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



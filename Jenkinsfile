pipeline {
    //agent any
    agent {
        docker {
            image 'ubuntu' // Escolha a versão desejada
            args '-u root --network tde' // Executa como root para instalar pacotes
        }
    }


    stages {
        // Defina suas etapas aqui

        stage('dependencias') {
            steps {

                sh 'apt-get update'
                    
                // Instale o Curl                
                sh 'apt-get install -y curl'

                // Instale o Node.js e o npm'
                sh 'curl -fsSL https://deb.nodesource.com/setup_lts.x -o setup_lts.x'
                sh 'bash setup_lts.x'
                sh 'apt-get install -y nodejs'
                
                // Verifique a versão do Node.js
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

        // stage('Análise de Dependências') {
        //     steps {
        //         // Executa a verificação de segurança com o npm audit
        //         script {
                    
        //             def auditOutput = sh(script: 'npm audit --json', returnStdout: true).trim()
        //             def auditJson = readJSON(text: auditOutput)
                    
        //             // Verifica se há vulnerabilidades
        //             def vulnerabilities = auditJson.metadata.vulnerabilities
        //             def criticalVulnerabilities = vulnerabilities.critical
        //             def highVulnerabilities = vulnerabilities.high
        //             def mediumVulnerabilities = vulnerabilities.medium
        //             def lowVulnerabilities = vulnerabilities.low

        //             echo "Vulnerabilidades Críticas: ${criticalVulnerabilities}"
        //             echo "Vulnerabilidades Altas: ${highVulnerabilities}"
        //             echo "Vulnerabilidades Médias: ${mediumVulnerabilities}"
        //             echo "Vulnerabilidades Baixas: ${lowVulnerabilities}"

                    
        //         }
        //     }
        // }

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



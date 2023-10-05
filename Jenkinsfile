pipeline {
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
                script {
                    // Usando withCredentials para acessar as credenciais
                    withCredentials([usernamePassword(credentialsId: '1', passwordVariable: 'MYSQL_PASSWORD', usernameVariable: 'MYSQL_USERNAME')]) {
                        
                        sh 'apt-get update'
                        sh 'apt install -y mysql-client'
                       
                        sh "echo 'TESTE BANCO DE DADOS'"
                        sh "mysql -h 172.19.0.2 -u $MYSQL_USERNAME -p'$MYSQL_PASSWORD' -e 'USE banco; SELECT * FROM logins;'"
                        
                        sh "export MYSQL_PASSWORD='$MYSQL_PASSWORD'"
                    }
                }
                sh 'printenv'
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



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

        // stage('Gerenciamento de segredos'){
        //     steps{
        //         script {
        //             // Busca e define a variavel de ambiente do Jenkins
        //             def minhaVariavel = env.MYSQL
        //                 sh 'export MYSQL=${minhaVariavel}'
        //         }
        //     }
        // }

        stage('Análise de Dependências') {
            steps {
                // Executa a verificação de segurança com o npm audit
                sh 'npm audit || true'
            }
        }

        // stage('Testes Unitários') {
        //     steps {
        //         // Executa os testes unitários
        //         sh 'npx jest --forceExit'
        //     }
        // }

        // stage('SAST') {
        //     steps {
        //         sh 'sleep 20'
        //         sh 'horusec start -p ./ -D'
        //     }
        // }

        // DAST na implantacao 
        // stage('DAST'){
        //     steps {
        //         sh 'node index.js &'
        //         sh 'sleep 20'
        //         sh 'nikto -h http://localhost:8888/'
        //     }
        // }

        //Docker file -> dokcer push
        //disponibilizar uma imagem pra rodar a aplicacao
        stage('Entrega'){
            steps{
                sh 'docker build -t jhonatanfariasdelima/tde-devsecops-jhonatan-eduardo:latest .'
                sh 'docker images'
                sh 'docker login -u jhonatanfariasdelima -p jhoni21061899'
                sh 'docker push jhonatanfariasdelima/tde-devsecops-jhonatan-eduardo:latest' 
            }
        }


        // usar a imagem do docker (kubernets) 
        stage('implantacao'){
            steps{
                sh 'sudo /snap/bin/kubectl apply -f testes.yaml'
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



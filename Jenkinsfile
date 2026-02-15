pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/Sujayskp/nodejs-demo-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t nodejs-demo-app .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh 'docker rm -f nodejs-app || true'
                sh 'docker run -d -p 3000:3000 --name nodejs-app nodejs-demo-app'
            }
        }
    }
}

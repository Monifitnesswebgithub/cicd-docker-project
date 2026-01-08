pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Monifitnesswebgithub/cicd-docker-project.git'
            }
        }
        stage('Build') {
            steps {
                sh 'docker-compose build'
            }
        }
        stage('Test') {
            steps {
                echo 'Running Unit Tests...'
                // This simulates a test success
                sh 'node -v' 
            }
        }
        stage('Push/Deploy') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
    post {
        always {
            sh 'docker system prune -f'
        }
    }
}
pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/YOUR_USERNAME/cicd-docker-project.git'
            }
        }
        stage('Build') {
            steps {
                sh 'docker-compose build'
            }
        }
        stage('Test') {
            steps {
                echo 'Running Unit Tests...'
                // This simulates a test success
                sh 'node -v' 
            }
        }
        stage('Push/Deploy') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
    post {
        always {
            sh 'docker system prune -f'
        }
    }
}

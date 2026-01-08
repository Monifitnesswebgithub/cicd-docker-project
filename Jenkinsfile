\pipeline {
    agent any

    environment {
        // Define variables for easier management
        APP_NAME = "my-node-app"
    }

    stages {
        stage('Cleanup') {
            steps {
                echo 'Cleaning up old workspace files...'
                cleanWs()
            }
        }

        stage('Checkout Source') {
            steps {
                echo 'Pulling code from GitHub...'
                checkout scm
            }
        }

        stage('Build Image') {
            steps {
                echo 'Building Docker Image via Docker Compose...'
                sh 'docker-compose build'
            }
        }

        stage('Deploy Application') {
            steps {
                echo 'Starting the application containers...'
                // -d runs it in the background
                sh 'docker-compose up -d'
            }
        }

        stage('Verify') {
            steps {
                echo 'Checking if container is running...'
                sh 'docker ps | grep node-app-container'
            }
        }
    }

    post {
        always {
            echo 'Cleaning up dangling Docker images...'
            // This removes unused images and stopped containers
            sh 'docker system prune -f'
        }
        success {
            echo 'Deployment Successful! Access your app at http://your-ip:80'
        }
    }
}

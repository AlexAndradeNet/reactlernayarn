pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh "apt-get update"
                sh "apt-get install yarn"
                sh "apt-get install watchman"
                sh "yarn"
                sh "yarn bs"
                sh "yarn transpile"
            }
        }
        stage('Test') {
            steps {
              echo 'Testing..'
            }
        }
        stage('Deploy') {
            when {
              expression {
                currentBuild.result == null || currentBuild.result == 'SUCCESS' 
              }
            }
            steps {
                echo 'Deploying....'
                sh "yarn build"
                sh "yarn web-start"
            }
        }
    }
}

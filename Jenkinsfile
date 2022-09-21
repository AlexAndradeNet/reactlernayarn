pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
              yarn
              yarn bs
              yarn transpile
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
                yarn build
                yarn web-start
            }
        }
    }
}

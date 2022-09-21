pipeline {
    agent any

    stages {
        stage('Setup') {
            steps {
                sh 'apt-get install build-essential -y'
            }
        }
        stage('Build') {
            steps {
                nodejs('node18') {
                    sh 'yarn'
                    sh 'yarn bs'
                    sh 'yarn transpile'
                }
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
                nodejs('node18') {
                    sh "yarn build"
                    sh "yarn web-start"
                }
            }
        }
    }
}

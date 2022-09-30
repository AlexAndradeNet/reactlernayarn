pipeline {
    agent any

    stages {
        stage('Setup') {
            steps {
                sh 'apt-get update'
                sh 'apt-get install build-essential watchman -y'
                nodejs('node18') {
                    sh 'npm install --global yarn'
                }
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
              nodejs('node18') {
                    sh "yarn test"
                }
                postSharedTestReport()
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
                /*nodejs('node18') {
                    sh "yarn build"
                }*/
            }
        }
    }
}

void postSharedTestReport(){
    script {
        try {
            junit "packages/webapp/coverage/clover.xml"
            publishHTML (
                target: [
                    allowMissing: true,
                    alwaysLinkToLastBuild: false,
                    keepAll: true,
                    reportDir: "${WORKSPACE}/packages/webapp/coverage/lcov-report",
                    reportFiles: 'index.html',
                    reportName: "Test Shared Coverage Report"
                ]
            )
        } catch (err) {
            script {
                if (currentBuild.result != 'SUCCESS') {currentBuild.result = 'FAILURE'}
            }
        } finally {
            script {
                if (currentBuild.result != 'SUCCESS') {currentBuild.result = 'FAILURE'}
            }
        }
    }
}


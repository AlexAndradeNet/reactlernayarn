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
                script {
                    withChecks('Web App') {
                        junit (testResults: 'packages/webapp/junit.xml', allowEmptyResults: true)
                    }
                    withChecks('Dummy') {
                        junit (testResults: 'junit2.xml', allowEmptyResults: true)
                    }
                }
            }
        }
        stage('Deploy') {
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
            junit "packages/webapp/junit.xml"
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


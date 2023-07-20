pipeline {
    agent any
    // tools {
    //     node 'node'
    // }
    environment {
        QUAY_REGISTRY = "example-registry-quay-openshift-operators.apps.cluster-csvlw.csvlw.sandbox1045.opentlc.com"
        QUAY_REPO_NAME = "example-registry-quay-openshift-operators.apps.cluster-csvlw.csvlw.sandbox1045.opentlc.com/fajjarnr/myportofolio"
        DOCKER_REGISTRY = "docker.io"
        REPO_NAME = "fajjarnr/myportofolio"
    }
    stages {
        stage("init") {
            steps {
                script {
                    echo "test"
                    sh "node -v"
                    sh "npm -v"
                }
            }
        }
        stage("Install Dependency") {
            steps {
                script {
                    echo "Install Dependency"
                    sh "npm install"
                }
            }
        }
        stage("Test Lint") {
            steps {
                script {
                    echo "Test Linter Code"
                    sh "npm run lint"
                }
            }
        }
        stage("Code Quality Check") {
            steps {
                script {
                    echo "Run Code Quality Checking"
                    sh "npm run sonar"
                }
            }
        }
        stage("Build Docker Image"){
            steps{
                script{
                    echo "building the docker image..."
                    withCredentials([usernamePassword(credentialsId: 'docker-cred', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                        sh "docker build -t ${REPO_NAME}:latest ."
                        // sh "echo $PASS | docker login -u $USER --password-stdin ${QUAY_REGISTRY}"
                        sh "echo $PASS | docker login -u $USER --password-stdin"
                        sh "docker push ${REPO_NAME}:latest"
                    }
                }
            }
        }
        stage("Deploy to Swarm"){
            steps{
                script{
                    echo "deploy to docker swarm..."
                }
            }
        }
    }   
}
pipeline {
    agent {
        docker {
            image 'node' 
            args '-p 2333:2333' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}
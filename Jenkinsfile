def createVersion() {
    return new Date().format('yyyyMMdd') + ".${env.BUILD_ID}"
}

/** 根据分支名称返回不同的 ID **/
def getEnvFileConfigId() {
    def branchName = env.BRANCH_NAME
    def branchId = ""
    switch(branchName) {
        case "master":
            branchId = "5d543643-59c8-4eab-8571-5462b95d7c52"
            break
        case "test":
            branchId = "9df9a631-2743-4890-9f46-d23dbb0365cf"
            break
        default:
            break
    }
    return branchId
}

pipeline {
    agent any
    
    environment {
        _version = createVersion()
        _env_file_id = getEnvFileConfigId()
        _hb_host = "hb.dns-north-1.saturncloud.com.cn:18091"
        _wx_web_hook = "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=88740cdf-7e83-48b7-8049-3e4cb1ced1ff"
        _image_path = "${_hb_host}/bi/bi-data:${_version}"
    }
    
    options {
        buildDiscarder logRotator(artifactDaysToKeepStr: '',
            artifactNumToKeepStr: '',
            daysToKeepStr: '7',
            numToKeepStr: '15')
    }

    stages {

        // stage('安装依赖') {
        //     steps {
        //         sh '''
        //           yarn install
        //         '''
        //     }
        // }

        // stage('打包 CMS UI') {
        //     steps {
        //         sh 'cd ./packages/client-cms && npm run build'
        //     }
        // }

        stage('设置环境变量') {
            steps {
                script {
                    configFileProvider([configFile(fileId: _env_file_id, variable: 'CONFIG_FILE')]){
                        sh "cp ${CONFIG_FILE} ./packages/server/.prod.env"
                    }
                }
            }
        }

        // stage('打包 server') {
        //     steps {
        //         sh 'cd ./packages/server && npm run build'
        //     }
        // }

        stage('Docker 打包') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'harbor', passwordVariable: 'password', usernameVariable: 'username')]) {
                    sh """
                        echo "_image_path: ${_image_path}"
                        docker build -t ${_image_path} .
                        docker push ${_image_path}
                    """
                }
            }
        }
        
        stage('更新镜像') {
            when{
                expression {
                    env.BRANCH_NAME == 'test'
                }
            }
            steps {
                sh '''
                  ssh root@39.106.216.189 "docker pull ${_image_path} && docker stop bi-data && docker rm bi-data"
                  ssh root@39.106.216.189 "docker run -v /bi_data:/root/node_server_data/bi_data/ -p 14008:7004 --name bi-data -d ${_image_path}"
                '''
            }
        }
    }
    
    post {
        success {
            sh """
                curl "${_wx_web_hook}" \
                    -H 'Content-Type: application/json' \
                    -d '{
                            "msgtype": "markdown",
                            "markdown": {
                                "content": "## ${JOB_NAME} 打包成功  
                                    >[任务详情](${BUILD_URL})  
                                    镜像地址: ${_image_path}"
                            }
                    }'
            """
        }
        failure {
            sh """
                curl "${_wx_web_hook}" \
                    -H 'Content-Type: application/json' \
                    -d '{
                            "msgtype": "markdown",
                            "markdown": {
                                "content": "## ${JOB_NAME} 打包失败   
                                    >[失败原因](${BUILD_URL}/console)"
                            }
                    }'
            """
        }
    }
}
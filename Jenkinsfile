node('node8') {
    def appName = 'xiaohongshudemo'
    def scmVars = ''

    stage('checkout') {
        gitlabCommitStatus('checkout') {
            scmVars = checkout scm

            echo 'Checkout repo'
            commitHash = checkout(scm).GIT_COMMIT
            def checkoutBranch = ' -f origin/' + gitlabTargetBranch
            def branch = gitlabTargetBranch.replaceAll('/', '-').replaceAll('_', '-')
            if (branch.startsWith("refs-tags-")) {
                def tags = branch.substring(10)
                checkoutBranch = '-b ' + tags + ' tags/' + tags
            }
            sh """
                echo ${checkoutBranch}
                git checkout ${checkoutBranch}
                git merge --no-edit --ff $commitHash
            """
        }
    }

    stage('lint') {
        gitlabCommitStatus('lint') {
            sh '''
                HTTPS_PROXY=http://10.1.0.107:3128 HTTP_PROXY=http://10.1.0.107:3128 npm i
                npm run lint
           '''
        }
    }

    stage('build') {
        gitlabCommitStatus('build') {
            sh '''
                NODE_ENV=production npm run build || exit 1
                rm -rf ./node_modules
                NODE_ENV=production HTTPS_PROXY=http://10.1.0.107:3128 HTTP_PROXY=http://10.1.0.107:3128 npm i
                rm -rf public
                mv dist public
           '''
        }
    }

    stage('push images') {
        def imageTag = ''
        gitlabBranch = gitlabBranch.replaceAll('/', '-').replaceAll('_', '-')
        imageTag = gitlabBranch + '-' + scmVars.GIT_COMMIT.substring(0, 8)
        if (gitlabBranch.startsWith("refs-tags-")) {
            imageTag = gitlabBranch.substring(10)
        }

        withDockerRegistry([credentialsId: 'jenkins-docker-reg', url: "https://docker-reg.devops.xiaohongshu.com/"]) {
            def image = docker.build("docker-reg.devops.xiaohongshu.com/qa/${appName}:${imageTag}", "--rm .")
            image.push()
            image.push("latest")
        }
    }
}

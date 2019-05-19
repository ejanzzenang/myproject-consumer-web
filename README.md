

# Set up Vue.js Frontend Using AWS S3
## Prerequsites

- AWS Account
- IAM User with Administrator Access and Access Keys
- AWS CLI
```
$ aws --version
aws-cli/1.16.8 Python/2.7.10 Darwin/16.7.0 botocore/1.11.8
```
- Git
```
$ git --version
git version 2.14.3 (Apple Git-98)
```
- vue-cli
```
$ npm install -g vue-cli 
$ vue --version
$ 2.9.6
```
- Docker
```
$ docker -v
Docker version 18.09.2, build 6247962
```


The  Project Layout will look like this:

```

```

## Step 1:

### Step 1.1: Create a CodeCommit Repository
```
$ aws codecommit create-repository --repository-name myproject-vuejs-web
```

### Step 1.2: Clone the repository
```
$ cd ~/environment
$ git clone https://git-codecommit.us-east-1.amazonaws.com/v1/repos/myproject-vuejs-web
```


### Step 1.3: Set up .gitignore
```
$ cd ~/environment/myproject-vuejs-web
$ vi .gitignore
```
```

```

### Step 1.4: Test access to repo by adding README.md file and push to remote repository

```
$ cd ~/environment/myproject-vuejs-web
$ echo "myproject-vuejs-web" >> README.md
$ git add .
$ git commit -m "Adding README.md"
$ git push origin master
```

### Step 1.5: Navigate to working directory
```
$ cd ~/environment/myproject-vuejs-web
```

### Step 1.6:  Set up directory structure
```

```


### (Optional) Clean up
```
$ aws codecommit delete-repository --repository-name myproject-vuejs-web
$ rm -rf ~/environment/myproject-vuejs-web
```

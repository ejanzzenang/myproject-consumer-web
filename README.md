
# Set up Vue.js Frontend 
## Prerequsites


- Git
```
$ git --version
git version 2.14.3 (Apple Git-98)
```
- npm
```
$ npm -v
6.7.0
```

- vue-cli
```
$ $ npm install -global vue-cli eslint
$ vue --version 
2.9.6
```

The  Project Layout will look like this:

```

```

## Step 1 Initialize a Basic Vue Application:

### Step 1.1: Create a CodeCommit Repository
```bash
$ aws codecommit create-repository --repository-name myproject-vuejs-web
```

### Step 1.2: Clone the repository
```bash
$ cd ~/environment
$ git clone https://git-codecommit.us-east-1.amazonaws.com/v1/repos/myproject-vuejs-web
```


### Step 1.3: Navigate to working directory
```
$ cd ~/environment/myproject-vuejs-web
```

### Step 1.4: Set up .gitignore
```
$ cd ~/environment/myproject-vuejs-web
$ vi .gitignore
```
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*

# Diagnostic reports (https://nodejs.org/api/report.html)
report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
coverage
*.lcov

# nyc test coverage
.nyc_output

# Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)

.grunt

# Bower dependency directory (https://bower.io/)
bower_components

# node-waf configuration
.lock-wscript

# Compiled binary addons (https://nodejs.org/api/addons.html)
build/Release

# Dependency directories
node_modules/
jspm_packages/

# TypeScript v1 declaration files
typings/

# TypeScript cache
*.tsbuildinfo

# Optional npm cache directory
.npm

# Optional eslint cache

.eslintcache

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env
.env.test

# parcel-bundler cache (https://parceljs.org/)
.cache

# next.js build output
.next

# nuxt.js build output
.nuxt

# vuepress build output
.vuepress/dist

# Serverless directories
.serverless/

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/
```

### Step 1.5: Test access to repo by adding README.md file and push to remote repository

```bash
$ cd ~/environment/myproject-vuejs-web
$ echo "myproject-vuejs-web" >> README.md
$ git add .
$ git commit -m "Adding README.md"
$ git push origin master
```

### Step 1.6:  Initialize Vue.js application
Walk through the instructions:
```bash
$ vue init webpack myproject-vuejs-web
```
```
? Project name myproject-vuejs-web
? Project description A Vue.js project
? Author Eddrich Janzzen Ang <eddrichang@gmail.com>
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? No
? Set up unit tests No
? Setup e2e tests with Nightwatch? No
? Should we run `npm install` for you after the project has been created? (recommended) npm

   vue-cli · Generated "myproject-vuejs-web".


# Installing project dependencies ...
# ========================

.....
shortend this part
.....


# Project initialization finished!
# ========================

To get started:

  cd myproject-vuejs-web
  npm run dev

Documentation can be found at https://vuejs-templates.github.io/webpack
```

### Step 1.7:  Test Vue Application Locally
```
$ cd myproject-vuejs-web
$ npm run dev
```
```
> myproject-vuejs-web@1.0.0 dev /Users/eddrichjanzzenang/Desktop/myproject-vuejs-web/myproject-vuejs-web
> webpack-dev-server --inline --progress --config build/webpack.dev.conf.js

 13% building modules 29/31 modules 2 active ...s-web/myproject-vuejs-web/src/App.vue{ parser: "babylon" } is deprecated; we now treat it as { parser: "babel" }.
 95% emitting

 DONE  Compiled successfully in 5803ms                                                                                                                                   5:06:47 PM

 I  Your application is running here: http://localhost:8080
```
In your browser, go to:  
```
http://localhost:8080
```
You should see the ff:
![](vue.png)


## Step 2: Setup Web Templates (Bootstrap 4)
Must be configurable to mix in different bootstrap templates

### Step 2.1: Install bootstrap and jquery popper.js dependency

Install dependencies:

In `myproject-vuejs-web` run the ff:
```bash
$ npm install bootstrap jquery popper.js webpack-cli --save 
$ npm install sass-loader node-sass webpack --save-dev
```

in `myproject-vuejs-web/package.json` you must see the ff dependencies:
```json
  "dependencies": {
    "bootstrap": "^4.3.1",
    "jquery": "^3.4.1",
    "popper.js": "^1.15.0"
  },
```

### Step 2.2: Require bootstrap in main.js

In `myproject-vuejs-web/src/main.js`

Add the following line 
```js

import Vue from 'vue'
import App from './App'
import router from './router'

-------------------------------------------------------------
//Add this below
import 'bootstrap'
-------------------------------------------------------------

....

```

### Step 2.2: Require bootstrap in css files

In `myproject-vuejs-web/assets/`
create file: `app.scss`

```scss
@import '~/bootstrap/scss/bootstrap'
```

We need to require `app.scss` in  `main.js` for it to be able to render the bootstrap css files. 

In `myproject-vuejs-web/src/main.js`
Add the following line 
```js
import Vue from 'vue'
import App from './App'
import router from './router'

import 'bootstrap'

-------------------------------------------------------------
// Add this below
import './assets/app.scss'
-------------------------------------------------------------

//more code below
....

```

### Step 2.3: Require require jQuery and popper.js

In `myproject-vuejs-web/src/main.js`
Add the following line 
```js
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap'
import './assets/app.scss'

-------------------------------------------------------------
// Add this below
// Assign `$` to the jQuery variable in the window element
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery
import 'popper.js'
-------------------------------------------------------------
....

```

Final Version of `main.js`:

```js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap'
import './assets/app.scss'

// Assign `$` to the jQuery variable in the window element
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery
import 'popper.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
```



## Step 3: Setup Basic U/I

### Step 3.1 Add a basic Bootstrap Navbar
In `myproject-vuejs-web/src/`
replace code in  `App.vue` with the following snippet:

Adding this code snippet will allow the navbar to be displayed in multiple views without needed to copy and paste code repetitively.

```html
<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <div class="container">
      <img src="./assets/logo.png">
      <router-view/>      
    </div>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  text-align: center;

}
</style>

```

### Step 3.1: Modify Router
In `myproject-vuejs-web/src/router`
replace code in  `index.js` with the following snippet:

```js
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})

export default router
```

### Step 3.2: Test home page

In your browser, go to:  
```
http://localhost:8080
```
You should see the ff:
![](home.png)


### Step 3.3:  Setup a Basic Home Page
In `myproject-vuejs-web/src/components`
add file: `home.vue`

```html
<template>
  <div>
    <h1>Home</h1>
    <div>
      <router-link to="/#"></router-link>
    </div>
  </div>
</template>
```

### Step 3.4:  Setup Index Page
TODO
```html

```

### Step 3.5:  Setup Index Page
TODO
```html
`
```


### (Optional) Clean up
```
$ aws codecommit delete-repository --repository-name myproject-vuejs-web
$ rm -rf ~/environment/myproject-vuejs-web
```

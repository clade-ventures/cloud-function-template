
![Firebase](https://www.gstatic.com/devrel-devsite/prod/v36e9b4a2fdc696650f09851e8c880b958655492821ded3455f80aaef87b6b52b/firebase/images/lockup.png)


# API Template by Cloud Function + Express
Hi,
This repository is cloud function template with express js framework. Follow these instructions to setup.

## Required Step

1. Install firebase tools\
npm: `npm install -g firebase-tools`\
yarn: `yarn global add firebase-tools`

2. Try login to your firebase account by terminal\
`firebase login`


## Installation
1. Clone this repository
2. Move to "functions" directory
3. Install the dependencies \
command:\
npm: `npm install`\
yarn: `yarn install`
4. Back to the root, change the project target in .firebaserc 


## Installation from existing cloud function
1. Move to "functions" directory
2. Run this command to install dependencies:\
command:\
`yarn add compression cors express lodash`
6. If you wanna use airbnb eslint style
   - install the dependecies\
      command:\
      npm: `npx install-peerdeps --dev eslint-config-airbnb`\
   - Change .eslintrc.json like below code\
`
{
  "extends": ["airbnb"]
}
`
4. Copy "constants", "helpers", "modules", "swagger" directory into functions directory
5. Replace your `index.js` with `functions/index.js` which this project own
6. done.

# Project Structure
```
|-- .firebaserc (firebase project name)
|-- firebase.json
|-- functions
    |-- constants
    |-- helpers
        |-- errors
        |-- response
        |-- database.js (this database use realtime database)
        |-- utilites
        |-- validator
    |-- modules
        |-- v1
        |-- [your module]
            |-- controller
                |-- create.js (put your api which related about create the data into this)
                |-- read.js (put your api which related with get the data into this)
                |-- update.js (put your api which related with update the data into this)
                |-- delete.js (put your api which related with delete the data into this)
            |-- route.js (define the routes for the module)
            |-- index.js (export the route)
        ...
        |-- index.js (instance the express and register each module inside this version here)
        |-- v2
        |-- v3
        ...
    |-- index.js (instance the main express and register each version module here)
|-- public
    |-- index.html
    |-- docs
        ... (swigger-ui files)
        |-- swagger.json (api documentation)
        |-- index.html
```
# Webpack Setup For Javascript And Firebase

1- Node install

  npm install --global serve

2- Go to project directory and open cmd

  npm init -y

  npm i firebase webpack webpack-cli

  create a directory src

  create file index.js in src

  create a directory dist

  create a file index.html in dist

3- Go to package.json file

  add this line scripts object

  "build": "webpack --mode production"


 4- Run this command

  npm run build

  serve dist/

# Webpack Setup For Javascript And Firebase

- Node install

npm install --global serve

- Go to project directory and open cmd

npm init -y

npm i firebase webpack webpack-cli

create a directory src

create file index.js in src

create a directory dist

create a file index.html in dist

- Go to package.json file

add this line scripts object

"build": "webpack --mode production"


- Run this command

npm run build

serve dist/
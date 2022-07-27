# Webpack Setup For Javascript And Firebase

## How to run this app?

git clone https://github.com/Ameen-Alam/Webpack-Setup-For-Javascript-And-Firebase.git

- Download nodejs https://nodejs.org/en/download/

#### Open the project and run the following commands:

```npm i```

```npm start```

----------------------------------------------


## Configuration Setps:

#### 1- Node install

- Download nodejs https://nodejs.org/en/download/

#### 2- Open the project and run the following commands.

```npm init -y```

```npm i firebase```

```npm i -D webpack-dev-server webpack webpack-cli html-webpack-plugin babel-loader @babel/core @babel/preset-env```

- create a directory src

- create file ```index.js``` and ```index.html``` in src

- Create a file ```webpack.config.js``` and copy past the code from my git repo.

#### 3- Go to package.json file

- add this line in  scripts object

```   "scripts": {```
```    "build": "webpack",```
```    "start": "webpack serve"```
```  },```


#### 4- And run the following commands

To build the app

```npm run build``` 

**OR**

To run the app

```npm start``` 



---------------------------------

#### Webpack 5 Crash Course | Frontend Development Setup

https://youtu.be/IZGNcSuwBZs
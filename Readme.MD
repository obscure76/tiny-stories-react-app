npm install --save-dev babel-preset-expo babel-loader

{
"presets": ["@babel/preset-env", "@babel/preset-react"]
}

"scripts": {
"start": "react-native start",
"build": "react-native bundle --platform ios --entry-file index.ios.js --dev false --bundle-output ios/main.jsbundle --assets-dest ios",
"test": "jest",
"lint": "eslint ."
}
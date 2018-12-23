yarn install --pure-lockfile
yarn add react react-dom
yarn add @babel/core @babel/preset-env @babel/preset-react
yarn add webpack webpack-cli babel-loader
yarn add --dev webpack-dev-server html-webpack-plugin css-loader style-loader

exec "$@"

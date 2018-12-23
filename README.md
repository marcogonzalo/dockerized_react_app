# Dockerized Webpack + Babel + React app

---
# ES:

## Webpack
  - ```disableHostCheck: true```, para desactivar la verificación del host y así evitar un error por _CORS_.

### Loaders

#### CSS Loader
  - ```importLoaders: 1```, define cuántos _loaders_ deben aplicarse antes del `css-loader`. Por ejemplo, sass-loader tendría que ir antes del css-loader.
  - ```localIdentName: "[name]\_[selector]_[hash:base64]"```, generador de nombre selectores único para evitar conflicto/sobreescritura en caso de usar el mismo selector en archivos CSS de componentes diferentes. 
  - ```camelCase: true```, exporta los nombres de clases en formato camelCase (útil en JS).

### Plugins

#### HtmlWebPackPlugin
  - ```template: './src/template.html'```, un HTML base como plantilla, en caso de que el generado por defecto no cumpla con las necesidades del proyecto. El html-webpack-plugin inyectara todos los CSS, JS y demás archivos necesarios en la estructura.

##### Versión simple
```
{
  test: /\.css$/,
  use: ["style-loader", "css-loader"]
}
```

## Dockerfile
  - `entrypoint.sh`, para reducir capas de ejecución en el Dockerfile y agrupar la instalación de paquetes base, en caso de que el `package.json` no tenga dependencias definidas.


---

# EN:

## Webpack
  - ```disableHostCheck: true```, for disabling host checking to avoid a _CORS_ error.

### Loaders

#### CSS Loader
  - ```importLoaders: 1```, defines how many loaders befor `css-loader` should be applied. For example, sass-loader would have to be before css-loader.
  - ```localIdentName: "[name]\_[selector]_[hash:base64]"```, generates unique css selector names avoiding conflicts/overridings if two components define the same selector name. 
  - ```camelCase: true```, exports class names in camelCase (useful in JS).

##### Simple version
```
{
  test: /\.css$/,
  use: ["style-loader", "css-loader"]
}
```

### Plugins

#### HtmlWebPackPlugin
  - ```template: './src/template.html'```, base html file as template if the default generated HTML doesn't meet your needs. The html-webpack-plugin will automatically inject all necessary CSS, JS, manifest and favicon files into the markup.

## Dockerfile
  - `entrypoint.sh`, reduces steps in Dockerfile and groups base packages installation, if `package.json` has not dependencies.


---

# References
  - [How to Create a React app from scratch using Webpack 4](https://medium.freecodecamp.org/part-1-react-app-from-scratch-using-webpack-4-562b1d231e75)

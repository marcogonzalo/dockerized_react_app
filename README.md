# Dockerized Webpack + Babel + React app

## Webpack
  - **disableHostCheck: true**, para desactivar la verificación del host y así evitar un error por *CORS*.

## Dockerfile
  - ```entrypoint.sh```, para reducir capas de ejecución en el Dockerfile y agrupar la instalación de paquetes base, en caso de no existir en el ```package.json```
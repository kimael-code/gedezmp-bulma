# Gedezmp

Generador de archivos ZMP para Zimbra.

Es una aplicación web que permite crear un archivo con extensión `.zmp` a partir de un archivo `.csv`. El archivo `.zmp` resultante
puede ser usado para ejecutar operaciones por lotes, vía terminal, en servidores de correo Zimbra.

## Tabla de Contenidos

1. [Construido con](#construido-con)
2. [Primeros Pasos](#primeros-pasos)
3. [Uso](#uso)
4. [Hoja de Ruta](#hoja-de-ruta)
5. [Contribuir](#contribuir)
6. [Licencia](#licencia)
7. [Contacto](#contacto)
8. [Agradecimientos](#agradecimientos)

## Construido con

* [React](https://reactjs.org/)
* [Bulma](https://bulma.io/)

## Primeros Pasos

### Quiero la App

1. Descargue la última versión del archivo comprimido ZIP [gedezmp-compiled-v*](https://github.com/kimael-code/gedezmp-bulma/releases).

2. Finalizada la descarga, descomprima el archivo.

3. Diríjase a la carpeta descomprimida (por defecto es `build`) y abra `index.html` con un navegador web.

### Quiero el Código Fuente

1. Clone el repositorio

   ```sh
   git clone https://github.com/kimael-code/gedezmp-bulma.git
   ```

2. Instale las dependencias

   ```sh
   npm install
   ```

3. Ejecute la app con

    ```sh
    npm start
    ```

## Uso

Usar Gedezmp es realmente sencillo:

1. Ejecute la aplicación abriendo el archivo index.html
2. Haga clic en el botón `Importar CSV` para buscar y seleccionar el archivo CSV a procesar
3. Haga clic en el botón `Exportar` para obtener el archivo ZMP
4. Listo, la aplicación generará un archivo `*-in-batch.zmp`

__Considerar lo siguiente:__

* El archivo CSV seleccionado debe contener una cabecera (primera línea) indicando el comando zmprov (en modo abreviado) seguido de los atributos. Las siguientes líneas contienen los valores respectivos al comando y a cada atributo.
* En caso de que el archivo CSV seleccionado no cumpla con lo anterior Gedezmp no podrá procesarlo.
* Dependiendo de la configuración de su navegador web, puede que deba seleccionar la carpeta en donde se descargará el archivo `*-in-batch.zmp` para poder obtenerlo.

_Ejemplo de CSV válido:_

`ca,displayName,givenName,sn`  
`perencejo@miempresa.com 1234,'Perencejo Pérez','Perencejo','Pérez'`  
`fulanita@miempresa.com '','Fulanita Oropeza','Fulanita','Oropeza'`  
`sutanita@miempresa.com '123&-4','Sutanita Pedregales','Sutanita','Pedregales'`

_Ejemplo de CSV inválido:_

`perencejo@miempresa.com, 1234,'Perencejo Pérez','Perencejo','Pérez'`  
`fulanita@miempresa.com, '','Fulanita Oropeza','Fulanita','Oropeza'`  
`sutanita@miempresa.com, '123&-4','Sutanita Pedregales','Sutanita','Pedregales'`

## Hoja de Ruta

Eche un vistazo a las [incidencias](https://github.com/kimael-code/gedezmp-bulma/issues) para que conozca nuevas funcionalidades propuestas y/o problemas conocidos. __Siéntase libre de solicitar nuevas funcionalidades o aportar nuevas ideas__.

## Contribuir

Las contribuciones hacen que la comunidad de código abierto sea un lugar tan increíble para aprender, inspirar y crear. Cualquier contribución que haga es **muy apreciada**.

1. Realice un fork del proyecto
2. Cree su rama feature (`git checkout -b feature/NewFeature`)
3. Confirme sus cambios (`git commit -m 'Add NewFeature'`)
4. Ejecute un Push a la rama (`git push origin feature/NewFeature`)
5. Abra una petición de fusión (Merge)

## Licencia

Se distribuye bajo licencia `MIT`. Para más información lea el archivo `LICENSE`.

## Contacto

Maikel Carballo - mcarballo@tutanota.com

## Agradecimientos

Próximamente.

# App tareas pendientes: 
Aplicacion de consola creada en el marco de una practica de Node.js. Version: ```0.0.1```

## Descripcion:
Aplicacion de consola donde uno le puede crear,leer,editar y eliminar(CRUD) tareas pendientes mediante un menu interactivo.

## Como ejecutar la app:

Para correr la app debe clonar el repositorio en su escritorio o donde usted crea correcto. Luego debemos abrir una terminal en la carpeta de la app y correr el comando ```npm i``` para que se instalen todas las dependecias necesarias para que la aplicacion funcione. 
Una vez hecho lo mencionado anteriormente ejecute el comando ```node app``` y luego navegue a traves del menu interactivo que posee la aplicacion.

## Menu de la app: 

1. **Crear tareas -->** En esta opcion se le solicitara una Descripcion de la tarea a crear y luego `Enter` para volver al menu.
2. **Listar tareas -->** Se listan todas las tareas almacendas.
3. **Listar tareas completadas -->** Se listan solamente las tareas que estan en estado: `Completadas` e indica su Fecha y hora de terminacion. 
4. **Listar tareas pendientes -->** Se listan solamente las tareas que estan en estado: `Pendientes`. 
5. **Completar tareas -->** Se puede marcar una tarea y cambiarla de estado. Puede pasar de `Pendientes` -> `Completadas` o de `Completadas` -> `Pendientes`
6. **Borrar tareas -->** Se puede borrar una tarea, solicita una confirmacion antes de ser borrada.
0. **Salir -->** Cerrar aplicacion.

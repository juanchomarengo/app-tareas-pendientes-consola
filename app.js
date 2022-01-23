require('colors')
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const {inquirerMenu,
            pausa,
            leerInput,
            confirmar,
            mostrarListadoChecklist,
            listadoTareasBorrar,} = require('./helpers/inquirer');

const Tareas = require('./models/tareas');

console.clear()

const main = async() => {

    let option = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();
    

    if(tareasDB){
        tareas.cargarTareasFromArray(tareasDB)
    }
    

    do{
        option = await inquirerMenu();
       
        switch (option) {
            case '1':
                const desc = await leerInput('Descripción:');
                tareas.crearTarea(desc)
            break;

            case '2'://Listar todas las tareas.
                tareas.listadoCompleto();
            break;
            case '3'://Listar completadas.
                tareas.listarPendientesCompletadas();
            break;
            case '4'://Listar pendientes.
                tareas.listarPendientesCompletadas(false);;
            break;
            case '5'://Completar o pendiente tareas.
               const ids = await mostrarListadoChecklist(tareas.listadoArr);
               tareas.toggleCompletadas(ids);
            break;
            case '6'://Borrar.
                const id = await listadoTareasBorrar (tareas.listadoArr);
                if(id !=='0'){
                    const ok = await confirmar('¿Estas seguro?')
                    if(ok){
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada correctamente!')
                    }
                }
            break;
        }

        guardarDB(tareas.listadoArr);

        await pausa();


    }while(option !== '0');


}


main(); 
const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
}

const argv = require('yargs')
    .command('crear', "Crear un elemento por hacer", opts)
    .command('actualizar', "Actualiza el estado completado de una tarea", opts)
    .command('borrar', "Elimina la tarea por hacer", opts)
    .help()
    .argv;

module.exports = {
    argv
}
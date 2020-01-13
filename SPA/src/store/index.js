let tasks = [
  {
    title : 'Primera Tarea',
    description : 'Esta es la descriptcion del la primera tarea',
    pending : true,
  },
  {
    title : 'Segunda Tarea',
    description : 'Esta es la descriptcion del la segunda tarea',
    pending : true,
  },
  {
    title : 'Tercera Tarea',
    description : 'Esta es la descriptcion del la tercera tarea',
    pending : false,
  }
];

/*Funcion para generar ID a las tareas, ya que en este proyecto no las
estamos obtiendo desde una BD*/
tasks.forEach((task, index)=>{
  task.id = index + 1;
});

export default {
  state: {
    tasks: tasks //O simplemente tasks en ES6
  },
  findTask(id){
    return this.state.tasks.find(task => task.id == id);
  }
};

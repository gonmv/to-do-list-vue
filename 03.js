const app = new Vue({
  el: '#app',
  data: {
    titulo: 'Tareas',
    tareas: [],
    nuevaTarea: ''
  },
  methods: {
    agregarTarea() {
      this.tareas.push({
        nombre: this.nuevaTarea,
        estado: false
      })
      this.nuevaTarea = ''
      localStorage.setItem('localTareas',JSON.stringify(this.tareas))
    },
    editarTarea(index) {
      this.tareas[index].estado = true
      localStorage.setItem('localTareas',JSON.stringify(this.tareas))
    },
    eliminarTarea(index) {
      this.tareas.splice(index,1)
      localStorage.setItem('localTareas',JSON.stringify(this.tareas))
    }
  },
  created: function() {
    let pseudoDB = JSON.parse(localStorage.getItem('localTareas'));
    if(pseudoDB === null) {
      this.tareas = []
    } else {
      this.tareas = pseudoDB
    }
  }
})
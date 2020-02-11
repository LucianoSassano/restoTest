var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}

Restaurant.prototype.sumatoria = function(){
    var total = 0 ;
    console.log("vuelve");
    

    if(this.calificaciones.length != 0){
        for(let i = 0; i < this.calificaciones.length ; i++){
            total += this.calificaciones[i];
    
        }
        return total;
        console.log(total);
    }
    
    
}

Restaurant.prototype.promedio = function(){
    var promedio;
    promedio = this.sumatoria();
    promedio = promedio / this.calificaciones.length;
    return promedio;
}

Restaurant.prototype.reservarHorario = function(horarioReservado) {
    const nuevosHorarios = this.horarios.filter(horario => horario != horarioReservado);
    this.horarios = nuevosHorarios;
    return this.horarios;
}

Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}

Restaurant.prototype.obtenerPuntuacion = function() {
    
        var prom = this.promedio(this.calificaciones);
        return prom;
    
}

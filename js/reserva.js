var Reserva = function(horario, cantidad, precio, codigo_de_descuento) {
  this.horario = horario;
  this.cantidad = cantidad;
  this.precio = precio;
  this.codigo_de_descuento = codigo_de_descuento;
};

Reserva.prototype.calcularPrecioBase = function() {
  return this.cantidad * this.precio;
};

Reserva.prototype.calcularAdicionales = function(precioBase) {
  var adicional;

  if (
    (this.horario.getHours() >= 13 && this.horario.getHours() <= 14) ||
    (this.horario.getHours() >= 20 && this.horario.getHours() <= 21)
  ) {
    adicional = precioBase * 0.15;
  }

  if (
    this.horario.getDay() == 5 ||
    this.horario.getDay() == 6 ||
    this.getDay() == 0
  ) {
    adicional = precioBase * 0.1;
  }

  return adicional;
};

/*Reserva.prototype.calcularPrecioFinal = function(){

    var precioBase = this.calcularPrecioBase();
    var adicionales = this.adicionales
}*/

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
  var montoAdicional;

  if (
    (this.horario.getHours() >= 13 && this.horario.getHours() <= 14) ||
    (this.horario.getHours() >= 20 && this.horario.getHours() <= 21)
  ) {
    montoAdicional += precioBase * 0.15;
  }

  if (
    this.horario.getDay() == 5 ||
    this.horario.getDay() == 6 ||
    this.getDay() == 0
  ) {
    montoAdicional += precioBase * 0.1;
  }

  return montoAdicional;
};

Reserva.prototype.calcularDescuentos = function(precioBase) {
  var montoDescuento;

  if (this.cantidad >= 4 && this.cantidad <= 6) {
    montoDescuento += precioBase * 0.05;
    //calculamos el 5 porciento del precio base y ese es nuesto monto de descuento
  } else if (this.cantidad == 7 || this.cantidad == 8) {
    montoDescuento += precioBase * 0.1;
  } else if (this.cantidad > 8) {
    montoDescuento += precioBase * 0.15;
  }

  switch (this.codigo_de_descuento) {
    case "DES15":
      montoDescuento += precioBase * 0.15;
      break;

    case "DES200":
      montoDescuento += 200;
      break;

    case "DES1":
      montoDescuento += this.precio;
      break;
  }

  return montoDescuento;
};

Reserva.prototype.calcularPrecioFinal = function() {
  var precioBase = this.calcularPrecioBase();
  var adicionales = this.calcularAdicionales(precioBase);
  var descuentos = this.calcularDescuentos(precioBase);

  return precioBase + adicionales - descuentos;
};

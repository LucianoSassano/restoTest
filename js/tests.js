const expect = chai.expect;
var resto = new Restaurant();
resto = listadoDeRestaurantes[0];
var lista = new Listado();
var lista = listadoDeRestaurantes;

describe("elimina el horario que se le pasa por parametro", () => {
  it("Al pasar 13:00 debe eliminarlo de los horarios disponibles", () => {
    //al comenzar el array tiene 3 horarios disponibles
    const nuevosHorarios = resto.reservarHorario("13:00");
    parseInt(nuevosHorarios);
    expect(nuevosHorarios.length).to.be.equal(2);

    //al finalizar elimina el horario que se le pasa y el array tiene dos
  });

  it("Al pasar 13:00 debe permanecer igual ya que no esta disponible el horario", () => {
    //al comenzar el array tiene 2 horarios disponibles
    const noDisponible = resto.reservarHorario("19:00");
    parseInt(noDisponible);
    expect(noDisponible.length).to.be.equal(2);
  });

  it("Al no pasar ningun horario debe permanecer igual ", () => {
    //al comenzar el array tiene 2 horarios disponibles
    const noDisponible = resto.reservarHorario();
    parseInt(noDisponible);
    expect(noDisponible.length).to.be.equal(2);
  });
});

describe("Obtiene la puntuacion de un restaurant a partir del promedio de sus califiaciones", () => {
  it("El promedio debe ser la suma de las califiaciones dividido la cantidad de califiaciones", () => {
    const promPuntuacion = resto.obtenerPuntuacion();
    expect(promPuntuacion).to.be.equal(7.4);
  });

  it("Si no posee califiaciones devuelve una puntuacion de cero", () => {
    resto.calificaciones.splice(0, 5);
    const sinPuntuacion = resto.obtenerPuntuacion();
    expect(sinPuntuacion).to.be.equal(0);
  });
});

/*describe("Obtiene los restaurantes que cumplan con los filtros impuestos", () => {
  it("Debe devolver uno o mas restos si cumplen las condiciones", () => {
    let lista3 = new Listado();
    console.log(lista3);
    lista3 = listadoDeRestaurantes;
    console.log(lista3);

    const filteredRestos = lista3.obtenerRestaurantes(
      "Hamburguesa",
      "Nueva York",
      "17:00"
    );
  });
});*/

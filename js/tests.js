const expect = chai.expect;
resto = listadoDeRestaurantes[0];
var lista = listadoDeRestaurantes;

console.log(resto);
console.log(resto.horarios);

//console.log(lista);

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
    console.log(resto.horarios);
    const noDisponible = resto.reservarHorario();
    parseInt(noDisponible);
    expect(noDisponible.length).to.be.equal(2);
  });
});

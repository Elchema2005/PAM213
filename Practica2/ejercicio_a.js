const persona = {
    nombre: "Ivan Isay",
    edad: 37,
    direccion: {
    ciudad: "Qro",
    pais: "MX"
}
};
const { nombre, edad } = persona;
const { ciudad } = persona.direccion;
console.log("Me llamo " + nombre + ", tengo " + edad + " años y vivo en " + ciudad);
const personas = [
{ nombre: "Ana", edad: 22 },
{ nombre: "Luis", edad: 35 },
{ nombre: "Angel", edad: 35 },
{ nombre: "Maria", edad: 28 },
{ nombre: "Marcos", edad: 25 }
];

const luisPersona = personas.find(persona => persona.nombre === "Luis");
console.log(luisPersona);
for (const persona of personas) {
    console.log(`${persona.nombre} tiene ${persona.edad} años.`);
}

let sumaEdades = 0;
for (const persona of personas) {
    sumaEdades += persona.edad;
}
console.log(`La suma de las edades es: ${sumaEdades}`);

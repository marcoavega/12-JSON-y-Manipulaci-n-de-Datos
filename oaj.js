const jsonString = '{"nombre":"Ana","edad":25,"ciudad":"Madrid"}';

const persona = JSON.parse(jsonString);

console.log(persona.nombre); // Output: "Ana"
console.log(persona.edad);   // Output: 25
console.log(persona.ciudad); // Output: "Madrid"

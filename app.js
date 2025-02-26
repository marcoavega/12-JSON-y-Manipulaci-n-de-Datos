const persona = {
    nombre: 'Ana',
    edad: 25,
    ciudad: 'Madrid'
};

const jsonString = JSON.stringify(persona);

console.log(jsonString); // Output: '{"nombre":"Ana","edad":25,"ciudad":"Madrid"}'

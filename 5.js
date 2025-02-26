const jsonStringInvalido = '{nombre:"Ana",edad:25}'; // Falta comillas en las claves

try {
    const persona = JSON.parse(jsonStringInvalido);
    console.log(persona);
} catch (error) {
    console.error('Error al parsear JSON:', error.message);
}

try {
    const datos = JSON.parse(datosExternos);
    // Usar los datos de manera segura
} catch (error) {
    console.error('Datos JSON inválidos:', error.message);
}



const obj = {
    a: 1,
    b: undefined,
    c: function() {},
    d: new Date()
};

const jsonString = JSON.stringify(obj);
console.log(jsonString);
// Output: '{"a":1,"d":"2023-10-21T15:00:00.000Z"}'
// Las propiedades 'b' y 'c' no se incluyen

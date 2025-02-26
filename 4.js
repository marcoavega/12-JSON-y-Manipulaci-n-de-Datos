const usuariosJSON = '[{"nombre":"Ana","edad":25},{"nombre":"Luis","edad":30},{"nombre":"Marta","edad":22}]';

const usuarios = JSON.parse(usuariosJSON);

usuarios.forEach(function(usuario) {
    console.log(`Nombre: ${usuario.nombre}, Edad: ${usuario.edad}`);
});

usuarios.forEach(function(usuario) {
    usuario.pais = 'España';
});

console.log(JSON.stringify(usuarios, null, 2));


const usuariosMayores = usuarios.filter(function(usuario) {
    return usuario.edad > 25;
});

console.log(usuariosMayores);
